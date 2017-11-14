'use strict';
/*
 provides the connector for posting new layout configurations
 registers the methods via the server.method() function
 registers the postLayoutConfiguration(configuration) method
 */
const AWSLayer = require('../aws_layer');
const dbLayer = new AWSLayer();
const async = require('async');
const _ = require('lodash');
const CacheManager = require('../../cache_manager/clear_resource.js');
// export it 'private' for mocking
module.exports._dbLayer = dbLayer;
const Scan = require('../scan');
const DBConfig = require('../../config/database.js');
// table name following type_[name]_version
const LAYOUT_TABLE = DBConfig.config.deploymentType + '_layout_configurations_' + DBConfig.config.layoutConfigurations.version;
const DISPLAY_TABLE = DBConfig.config.deploymentType + '_display_configurations_' + DBConfig.config.displayConfigurations.version;

/**
 * callback type `nextCacheCallback` used for the next function of hapi cache methods.
 * @param {object} [error] - error if one occurred
 * @param {*} value - the result of the successful cache method
 */
/**
 * Puts the configuration document into the database into the correct table
 * @description the configuration object @properties are all required and validated at the route
 * @param {object} configuration - The layout configuration object to submit to the database
 * @property {String} content_id - Hash key for storing the configuration document
 * @property {Number} revision_id - Sort key for storing the configuration document
 * @property {String} name - The name (user facing) of the configuration
 * @property {Number} content_size_x - width of the layout
 * @property {Number} content_size_y - height of the layout
 * @property {String} revision_description - the description of changes to config
 * @property {Array <String>} tags - An array of the tags for the layout
 * @property {Array <content_component>} content_components - the content components in the array
 * @callback nextCacheCallback
 */
const postLayoutConfiguration = function(newLayoutConfiguration, next) {
    dbLayer.put({
        TableName: LAYOUT_TABLE,
        Item: newLayoutConfiguration
    }, (error, data) => {
        if (error) {
            next(error);
        } else {
            // success response to return with
            if (newLayoutConfiguration.new_content_id !== true) {
                var params = {
                    TableName: DISPLAY_TABLE,
                    ProjectionExpression: 'content_id, components, revision_id'
                };

                Scan(params, (error, data) => {
                    if (error) {
                        next(error);
                    } else {
                        const arrayOfAllDisplays = data;
                        let hashOfAllDisplays = {};
                        var displaysUpdated = [];
                        for (let i = 0; i < arrayOfAllDisplays.length; i++) {
                            let content_id = arrayOfAllDisplays[i].content_id;
                            let revision_id = arrayOfAllDisplays[i].revision_id;
                            if (!hashOfAllDisplays[content_id]) {
                                hashOfAllDisplays[content_id] = revision_id;
                            } else {
                                if (hashOfAllDisplays[content_id] < revision_id) {
                                    hashOfAllDisplays[content_id] = revision_id;
                                }
                            }
                        }
                        const filteredArrayOfAllDisplays = _.filter(arrayOfAllDisplays, function(filteredDisplay) {
                            return hashOfAllDisplays[filteredDisplay.content_id] === filteredDisplay.revision_id;
                        });
                        async.eachSeries(filteredArrayOfAllDisplays, function iteratee(filteredDisplay, filteredArrayOfAllDisplaysCB) {
                            const filteredDisplayComponentArray = filteredDisplay.components;
                            async.eachSeries(filteredDisplayComponentArray, function iteratee(filteredDisplayComponent, filteredDisplayComponentArrayCB) {
                                if (filteredDisplayComponent.content_id === newLayoutConfiguration.content_id) {
                                    // define the query parameters
                                    let keyConditionExpression = 'content_id = :content_id and revision_id = :revision_id';
                                    let expressionAttributeValues = {
                                        ":revision_id": filteredDisplay.revision_id,
                                        ":content_id": filteredDisplay.content_id
                                    }
                                    dbLayer.query({
                                        TableName: DISPLAY_TABLE,
                                        ConsistentRead: false,
                                        ScanIndexForward: false,
                                        Limit: 1,
                                        KeyConditionExpression: keyConditionExpression,
                                        ExpressionAttributeValues: expressionAttributeValues,
                                        Select: 'ALL_ATTRIBUTES'
                                    }, function(error, data) {
                                        if (error) {
                                            console.log(error);
                                            console.log("There has been an error in get display query in postLayout");
                                            //next(error);
                                            filteredDisplayComponentArrayCB(error);
                                            return;
                                        } else {
                                            let allMatchingDisplayInformation = data.Items[0];
                                            const allMatchingDisplayInformationComponentArray = allMatchingDisplayInformation.components;
                                            for (var i = 0; i < allMatchingDisplayInformationComponentArray.length; i++) {
                                                if (allMatchingDisplayInformationComponentArray[i].content_id === newLayoutConfiguration.content_id) {
                                                    // set the matched layout to be the new one in the display
                                                    allMatchingDisplayInformation.components[i] =  _.cloneDeep(newLayoutConfiguration);
                                                    // new layout configuration
                                                    const layoutToReplace = allMatchingDisplayInformation.components[i];
                                                    // change property names
                                                    layoutToReplace.layout_component_size_x = layoutToReplace.content_size_x;
                                                    layoutToReplace.layout_component_size_y = layoutToReplace.content_size_y;
                                                    delete layoutToReplace.content_size_x;
                                                    delete layoutToReplace.content_size_y;
                                                }
                                            }
                                            const date = new Date();
                                            const updated_revision_description = newLayoutConfiguration.revision_description + " - Layout " + newLayoutConfiguration.content_id + " Updated";
                                            allMatchingDisplayInformation.revision_description = updated_revision_description;
                                            allMatchingDisplayInformation.revision_id = date.getTime();

                                            dbLayer.put({
                                                TableName: DISPLAY_TABLE,
                                                Item: allMatchingDisplayInformation
                                            }, (error, data) => {
                                                if (error) {
                                                    filteredDisplayComponentArrayCB(error);
                                                } else {
                                                    displaysUpdated.push(allMatchingDisplayInformation.content_id);
                                                    // clear cache
                                                    CacheManager.purgeDisplay(allMatchingDisplayInformation.content_id, function (err) {
                                                        if (err) {
                                                            console.log(err);
                                                        }
                                                    });
                                                    filteredDisplayComponentArrayCB(null);
                                                }
                                            });


                                        }
                                    });
                                } else {
                                    filteredDisplayComponentArrayCB(null);
                                }
                            }, function(err) {
                                //console.log('all filteredDisplayComponents done');
                                if (err) {
                                    filteredArrayOfAllDisplaysCB(err);
                                    return;
                                }
                                filteredArrayOfAllDisplaysCB(null);
                            });
                        }, function(err) {
                            // ===== outer complete
                            // if err return error
                            if(err){
                                next(err);
                            }
                            //console.log(displaysUpdated);
                            let response = {
                                results: {
                                    success: true,
                                    content_id: newLayoutConfiguration.content_id,
                                    revision_id: newLayoutConfiguration.revision_id,
                                    displaysUpdated: displaysUpdated
                                }
                            };
                            next(null, response);
                        });
                    }
                });
            } else {
            }
            let response = {
                results: {
                    success: true,
                    content_id: newLayoutConfiguration.content_id,
                    revision_id: newLayoutConfiguration.revision_id
                }
            };
            if (newLayoutConfiguration.new_content_id === true) {
                next(null, response);
            }
        }
    });
};
module.exports.register = function(server) {
    server.method({
        name: 'postLayoutConfiguration',
        method: postLayoutConfiguration
    });
};
