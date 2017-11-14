describe('Binary Search', function() {

    it('should return 0 for 5 in [5]', function() {
        expect(binarySearch([5], 5)).to.equal(0);
    });

    it('should return null for 4 in [5]', function() {
        expect(binarySearch([5], 4)).to.equal(null);
    });

    it('should return 0 for 1 in [1, 2, 3, 4, 5]', function() {
        expect(binarySearch([1, 2, 3, 4, 5], 1)).to.equal(0);
    });

    it('should return 1 for 2 in [1, 2, 3, 4, 5]', function() {
        expect(binarySearch([1, 2, 3, 4, 5], 2)).to.equal(1);
    });

    it('should return 2 for 3 in [1, 2, 3, 4, 5]', function() {
        expect(binarySearch([1, 2, 3, 4, 5], 3)).to.equal(2);
    });

    it('should return 3 for 4 in [1, 2, 3, 4, 5]', function() {
        expect(binarySearch([1, 2, 3, 4, 5], 4)).to.equal(3);
    });

    it('should return 4 for 5 in [1, 2, 3, 4, 5]', function() {
        expect(binarySearch([1, 2, 3, 4, 5], 5)).to.equal(4);
    });
});

describe("Rotated Array Search", function() {
    it("should return the index of that item", function() {
        expect(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 1)).to.equal(4);
    });

    it("should return null for a value that is not in the array", function() {
        expect(rotatedArraySearch([1, 2, 3], 5)).to.equal(null);
    });
});

describe('Bubble Sort', function() {
    it('should sort a short array of integers', function() {
        expect(bubbleSort([8, 7, 3, 6, 9, 2, 4, 5, 1])).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});

describe('Selection Sort', function() {
    it('should sort an array', function() {
        expect(selectionSort([22, 11, 99, 88, 9, 7, 42])).to.eql([7, 9, 11, 22, 42, 88, 99]);
    });

    it('should sort an array', function() {
        expect(selectionSort([7, 6, 5, 4, 3, 2, 1])).to.eql([1, 2, 3, 4, 5, 6, 7]);
    });
});

describe('Insertion Sort', function() {
    it('should sort an array', function() {
        expect(insertionSort([100, 10, 2, 4, 3, 30, 41, 1, 21])).to.eql([1, 2, 3, 4, 10, 21, 30, 41, 100]);
    });
});

describe('Merge Sort', function() {
    it('should sort a short array of integers', function() {
        expect(mergeSort([8, 7, 3, 6, 9, 2, 4, 5, 1])).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});

describe('quicksort', function() {
    it('should sort a short array of integers', function() {
      var array = [8, 7, 3, 6, 9, 2, 4, 5, 1];
        expect(quicksort(array, 0, array.length - 1 )).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    // it('should sort an enormous array of random integers', function() {
    //     var input = [];
    //     var sorted;
    //     var n = 1000;
    //     for (var i = 0; i < n; i++) {
    //         var number = Math.floor(Math.random() * n);
    //         input.push(number);
    //     }
    //     sorted = input.sort(function(a, b) {
    //         return a - b;
    //     }); // sort numerically, not lexicographically
    //     var result = quicksort(input);
    //
    //     // using .eql can cause an n-line error message to print, so we do it by hand
    //     for (var i = 0; i < n; i++) {
    //         expect(result[i]).to.eql(sorted[i]);
    //     }
    // });
});



describe('nth Fibonacci', function() {
    // it('should handle the base cases with ease', function() {
    //     expect(nthFibonacci(0)).to.equal(0);
    //     expect(nthFibonacci(1)).to.equal(1);
    // });

    it('should return the nth Fibonacci number for a given n', function() {
        expect(nthFibonacci(5)).to.equal(5);
        //expect(nthFibonacci(10)).to.equal(55);
        // it('should produce values in linear time', function() {
        //     // all this crazyness does it check if your solution is better than
        //     // the naive, exponential solution.
        //     var diffs = [],
        //         start = 0,
        //         end = 0,
        //         i = 0,
        //         max_diff = 100,
        //         max_dur = 1000,
        //         init = new Date;
        //
        //     while (end - start < max_diff && end - init < max_dur) {
        //         start = new Date();
        //         nthFibonacci(i++);
        //         end = new Date();
        //         diffs.push(end - start);
        //     }
        //     var avg = function(array) {
        //         var n = 0,
        //             sum = 0;
        //         for (var i = 0; i < array.length; i++) {
        //             sum += array[i];
        //         }
        //         return sum / array.length;
        //     }
        //     var expected_dur_ratio = i / (end - init);
        //     var actual_dur_ratio = diffs[diffs.length - 1] / (end - init);
        //     // if the computational duration is increasing linearly, the last computation
        //     // should make up less than 10% of the total computation.
        //     actual_dur_ratio.should.be.below(0.1);
        // });

        // it('should not use recursion', function() {
        //     // if you've gotten this far, you're doing great!
        //     // this is checking if your `nthFibonacci` function is at some point
        //     // calling itself (making it a recursive function)
        //     // Note: this test may produce a false positive if you have a comment
        //     // in your `nthFibonacci` function that contains the string literal
        //     // "nthFibonacci" somewhere within it.
        //     should.not.exist(nthFibonacci.toString().match(/nthFibonacci/));
        // });
        //expect(nthFibonacci(20)).to.equal(6765);
    });
});

describe('Rock Paper Scissors', function() {
    it('should contain every throw', function() {
        var expected = [
            ["rock", "rock", "rock"],
            ["rock", "rock", "paper"],
            ["rock", "rock", "scissors"],
            ["rock", "paper", "rock"],
            ["rock", "paper", "paper"],
            ["rock", "paper", "scissors"],
            ["rock", "scissors", "rock"],
            ["rock", "scissors", "paper"],
            ["rock", "scissors", "scissors"],
            ["paper", "rock", "rock"],
            ["paper", "rock", "paper"],
            ["paper", "rock", "scissors"],
            ["paper", "paper", "rock"],
            ["paper", "paper", "paper"],
            ["paper", "paper", "scissors"],
            ["paper", "scissors", "rock"],
            ["paper", "scissors", "paper"],
            ["paper", "scissors", "scissors"],
            ["scissors", "rock", "rock"],
            ["scissors", "rock", "paper"],
            ["scissors", "rock", "scissors"],
            ["scissors", "paper", "rock"],
            ["scissors", "paper", "paper"],
            ["scissors", "paper", "scissors"],
            ["scissors", "scissors", "rock"],
            ["scissors", "scissors", "paper"],
            ["scissors", "scissors", "scissors"]
        ];

        expect(rockPaperScissors(3)).to.eql(expected);
    });
});

describe('Telephone Words', function() {
    it('should return one permutation for 0001', function() {
        expect(telephoneWords('0001').length).to.eql(1);

    });

    it('should return three permutations for 0002', function() {
        var answer = ['000A', '000B', '000C'];
        expect(telephoneWords('0002').length).to.eql(3);
    });

    it('should return nine permutations for 1123', function() {
        var answer = ['11AD', '11BD', '11CD', '11AE', '11BE', '11CE', '11AF', '11BF', '11CF'];
        expect(telephoneWords('1123').length).to.eql(9);
    });

    it('should return 27 permutations for 1234', function() {
        var answer = ['1ADG', '1ADH', '1ADI', '1AEG', '1AEH', '1AEI', '1AFG', '1AFH', '1AFI', '1BDG', '1BDH', '1BDI', '1BEG', '1BEH', '1BEI', '1BFG', '1BFH', '1BFI', '1CDG', '1CDH', '1CDI', '1CEG', '1CEH', '1CEI', '1CFG', '1CFH', '1CFI'];
        expect(telephoneWords('1234').length).to.eql(27);
    });

    it('should return 144 permutations for 5987', function() {
        // don't forget, some keys have 4 letters!
        // independently verified by http://www.ps.missouri.edu/rickspage/ConvertPhoneNumber.html
        var answer = ['JWTP', 'JWTQ', 'JWTR', 'JWTS', 'JWUP', 'JWUQ', 'JWUR', 'JWUS', 'JWVP', 'JWVQ', 'JWVR', 'JWVS', 'JXTP', 'JXTQ', 'JXTR', 'JXTS', 'JXUP', 'JXUQ', 'JXUR', 'JXUS', 'JXVP', 'JXVQ', 'JXVR', 'JXVS', 'JYTP', 'JYTQ', 'JYTR', 'JYTS', 'JYUP', 'JYUQ', 'JYUR', 'JYUS', 'JYVP', 'JYVQ', 'JYVR', 'JYVS', 'JZTP', 'JZTQ', 'JZTR', 'JZTS', 'JZUP', 'JZUQ', 'JZUR', 'JZUS', 'JZVP', 'JZVQ', 'JZVR', 'JZVS', 'KWTP', 'KWTQ', 'KWTR', 'KWTS', 'KWUP', 'KWUQ', 'KWUR', 'KWUS', 'KWVP', 'KWVQ', 'KWVR', 'KWVS', 'KXTP', 'KXTQ', 'KXTR', 'KXTS', 'KXUP', 'KXUQ', 'KXUR', 'KXUS', 'KXVP', 'KXVQ', 'KXVR', 'KXVS', 'KYTP', 'KYTQ', 'KYTR', 'KYTS', 'KYUP', 'KYUQ', 'KYUR', 'KYUS', 'KYVP', 'KYVQ', 'KYVR', 'KYVS', 'KZTP', 'KZTQ', 'KZTR', 'KZTS', 'KZUP', 'KZUQ', 'KZUR', 'KZUS', 'KZVP', 'KZVQ', 'KZVR', 'KZVS', 'LWTP', 'LWTQ', 'LWTR', 'LWTS', 'LWUP', 'LWUQ', 'LWUR', 'LWUS', 'LWVP', 'LWVQ', 'LWVR', 'LWVS', 'LXTP', 'LXTQ', 'LXTR', 'LXTS', 'LXUP', 'LXUQ', 'LXUR', 'LXUS', 'LXVP', 'LXVQ', 'LXVR', 'LXVS', 'LYTP', 'LYTQ', 'LYTR', 'LYTS', 'LYUP', 'LYUQ', 'LYUR', 'LYUS', 'LYVP', 'LYVQ', 'LYVR', 'LYVS', 'LZTP', 'LZTQ', 'LZTR', 'LZTS', 'LZUP', 'LZUQ', 'LZUR', 'LZUS', 'LZVP', 'LZVQ', 'LZVR', 'LZVS'];
        expect(telephoneWords('5987').length).to.eql(144);
    });
});

describe('allAnagrams', function() {
    it('should return an array with a single character', function() {
        expect(allAnagrams('a')).to.eql(['a']);
    });

    it('should return an array of anagrams that contains `lives` for input `elvis`', function() {
        var result = allAnagrams('elvis');
        var found = result.indexOf('lives') !== -1;
        expect(found).to.equal(true);
    });

    // it('should return an array of anagrams that contains `badcredit` for input `debitcard`', function() {
    //     var result = allAnagrams('debitcard');
    //     var found = result.indexOf('badcredit') !== -1;
    //     expect(found).to.equal(true);
    // });


    // it('should return all anagrams for \'ab\'', function(){
    //   var expected = ['ab', 'ba'];
    //   var result = allAnagrams('ab');
    //   var item, found = false;
    //   for(var i = 0; i < expected.length; i++){
    //     item = expected[i];
    //     found = result.indexOf(item) !== -1;
    //     found.should.be.true;
    //   }
    // });
    //
    // it('should return all anagrams for \'abc\'', function(){
    //   var expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    //   var result = allAnagrams('abc');
    //   result.sort().should.be.eql(expected);
    //   var item, found = false;
    //   for(var i = 0; i < expected.length; i++){
    //     item = expected[i];
    //     found = result.indexOf(item) !== -1;
    //     found.should.be.true;
    //   }
    // });
    //
    // it('should return all anagrams for \'apps\'', function() {
    //   var expected = [ 'apps', 'apsp', 'aspp', 'paps', 'pasp', 'ppas'
    //     , 'ppsa', 'psap', 'pspa', 'sapp', 'spap', 'sppa' ];
    //   var result = allAnagrams('apps');
    //   var item, index, found = false;
    //   for(var i = 0; i < expected.length; i++){
    //     item = expected[i];
    //     found = result.indexOf(item) !== -1;
    //     // we should have found the current expected anagram item in your
    //     // `result` array but we did not!
    //     found.should.be.true;
    //   }
    // });
    //
    // it('should return all __unique__ anagrams for \'apps\'', function() {
    //   // if you've gotten this far, you're doing awesome. this last test
    //   // is to check if you're returning an anagram array without duplicates
    //   var expected = [ 'apps', 'apsp', 'aspp', 'paps', 'pasp', 'ppas', 'ppsa'
    //     , 'psap', 'pspa', 'sapp', 'spap', 'sppa' ];
    //   var match = true;
    //   var result = allAnagrams('apps');
    //   result.length.should.be.equal(expected.length);
    // });
    //
    // it('should not use underscore\'s `uniq`', function(){
    //   // this just checks your code for any usage of `uniq`
    //   // NOTE: this test _might_ still fail even if you technically don't use
    //   // `uniq` (ie., if you hae commented out code that still references
    //   // `uniq` in your solution.)
    //   var usesUniq = allAnagrams.toString().match(/\s*_\.uniq/) === null;
    //   usesUniq.should.be.true;
    // });
});

// describe('Robot Paths', function() {
//     it('should correctly identify the number of unique paths for a 1x1 grid', function() {
//         expect(robotPaths(1)).to.eql(1);
//     });
//
//     it('should correctly identify the number of unique paths for a 2x2 grid', function() {
//         expect(robotPaths(2)).to.eql(2);
//     });
//
//     it('should correctly identify the number of unique paths for a 3x3 grid', function() {
//         expect(robotPaths(3)).to.eql(12);
//     });
//
//     it('should correctly identify the number of unique paths for a 4x4 grid', function() {
//         expect(robotPaths(4)).to.eql(184);
//     });
//
//     it('should correctly identify the number of unique paths for a 5x5 grid', function() {
//         expect(robotPaths(5)).to.eql(8512);
//     });
//
//     it('should correctly identify the number of unique paths for 6x6 grid', function() {
//         expect(robotPaths(6)).to.eql(1262816);
//     });
// });

describe('Multiple Matrices', function() {
    var a = [
        [8, 3],
        [2, 4],
        [3, 6]
    ];
    var b = [
        [1, 2, 3],
        [4, 6, 8]
    ];

    it('should return a 3x3 martix if mulitplying a 2x3 by a 3x2', function() {
        expect(multiplyMartix(a, b)).to.eql([
            [20, 34, 48],
            [18, 28, 38],
            [27, 42, 57]
        ]);

    });

    it('should return a 2x2 martix if mulitplying a 3x2 by a 2x3', function() {
        expect(multiplyMartix(b, a)).to.eql([
            [21, 29],
            [68, 84]
        ]);
    });
});

describe('rotateMatrix', function() {

    it('should not alter a 0x0 matrix', function() {
        // Verify the size of a matrix
        var shouldBeMbyN = function(matrix, m, n) {
            expect(matrix.length).to.eql(m);
            for (var i = 0; i < n; i++) {
                expect(matrix[i].length).to.eql(n);
            }
        };

        var input = [];
        var result = rotateMatrix(input);
        shouldBeMbyN(result, 0, 0);
        expect(result).to.eql(result);
    });

    it('should not alter a 1x1 matrix', function() {
        // Verify the size of a matrix
        var shouldBeMbyN = function(matrix, m, n) {
            expect(matrix.length).to.eql(m);
            for (var i = 0; i < n; i++) {
                expect(matrix[i].length).to.eql(n);
            }
        };

        var input = [
            [1]
        ];
        var result = rotateMatrix(input);
        shouldBeMbyN(result, 1, 1);
        expect(result).to.eql(input);
    });

    it('should rotate a 2x2 matrix', function() {
        // Verify the size of a matrix
        var shouldBeMbyN = function(matrix, m, n) {
            expect(matrix.length).to.eql(m);
            for (var i = 0; i < n; i++) {
                expect(matrix[i].length).to.eql(n);
            }
        };

        var input = [
            [1, 2],
            [3, 4]
        ];
        var result = rotateMatrix(input);
        shouldBeMbyN(result, 2, 2);
        var output = [
            [3, 1],
            [4, 2]
        ];
        expect(result).to.eql(output);
    });

    it('should rotate a 3x3 matrix', function() {
        // Verify the size of a matrix
        var shouldBeMbyN = function(matrix, m, n) {
            expect(matrix.length).to.eql(m);
            for (var i = 0; i < n; i++) {
                expect(matrix[i].length).to.eql(n);
            }
        };

        var input = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        var result = rotateMatrix(input);
        shouldBeMbyN(result, 3, 3);
        var output = [
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3]
        ];

        expect(result).to.eql(output);
    });

    it('should rotate a 4x4 matrix', function() {
        // Verify the size of a matrix
        var shouldBeMbyN = function(matrix, m, n) {
            expect(matrix.length).to.eql(m);
            for (var i = 0; i < n; i++) {
                expect(matrix[i].length).to.eql(n);
            }
        };

        var input = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 'A', 'B', 'C'],
            ['D', 'E', 'F', 'G']
        ];
        var result = rotateMatrix(input);
        shouldBeMbyN(result, 4, 4);
        var output = [
            ['D', 9, 5, 1],
            ['E', 'A', 6, 2],
            ['F', 'B', 7, 3],
            ['G', 'C', 8, 4]
        ];

        expect(result).to.eql(output);
    });

    context('EXTRA CREDIT:', function() {
        it('should rotate a 4x5 matrix', function() {
            // Verify the size of a matrix
            var shouldBeMbyN = function(matrix, m, n) {
                expect(matrix.length).to.eql(m);
                for (var i = 0; i < n; i++) {
                    expect(matrix[i].length).to.eql(n);
                }
            };

            var input = [
                [1, 2, 3, 4, 5],
                [6, 7, 8, 9, 'A'],
                ['B', 'C', 'D', 'E', 'F'],
                ['G', 'H', 'I', 'J', 'K'],
            ];
            var result = rotateMatrix(input);
            shouldBeMbyN(result, 5, 4);
            var output = [
                ['G', 'B', 6, 1],
                ['H', 'C', 7, 2],
                ['I', 'D', 8, 3],
                ['J', 'E', 9, 4],
                ['K', 'F', 'A', 5],
            ];

            expect(result).to.eql(output);
        });

        it('should rotate a 2x6 matrix', function() {
            // Verify the size of a matrix
            var shouldBeMbyN = function(matrix, m, n) {
                expect(matrix.length).to.eql(m);
                for (var i = 0; i < n; i++) {
                    expect(matrix[i].length).to.eql(n);
                }
            };

            var input = [
                [1, 2, 3, 4, 5, 6],
                [7, 8, 9, 'A', 'B', 'C'],
            ];
            var result = rotateMatrix(input);
            shouldBeMbyN(result, 6, 2);
            var output = [
                [7, 1],
                [8, 2],
                [9, 3],
                ['A', 4],
                ['B', 5],
                ['C', 6]
            ];

            expect(result).to.eql(output);
        });

        it('should rotate a 3x3 matrix counter-clockwise', function() {
            // Verify the size of a matrix
            var shouldBeMbyN = function(matrix, m, n) {
                expect(matrix.length).to.eql(m);
                for (var i = 0; i < n; i++) {
                    expect(matrix[i].length).to.eql(n);
                }
            };

            var input = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ];
            var result = rotateMatrix(input, -1);
            shouldBeMbyN(result, 3, 3);
            var output = [
                [3, 6, 9],
                [2, 5, 8],
                [1, 4, 7]
            ];

            expect(result).to.eql(output);
        });
    });
});


describe('Longest Palindrome', function() {
    it('should return return racecare', function() {
        expect(findLongestPalendrome('sfsdbobracecarpopsdfsd')).to.eql('racecar');
    });
});

describe('Even Occurrence', function() {
    it('should return the first even occurrence of an array of numbers', function() {
        expect(evenOccurrence([1, 3, 3, 3, 2, 4, 4, 2, 5])).to.equal(2);
    });

    it('should return the first even occurrence of an array with strings', function() {
        expect(evenOccurrence(['cat', 'dog', 'dig', 'cat'])).to.equal('cat');
    });

    it('should return the first even occurrence of a mixed array', function() {
        expect(evenOccurrence(['meow', 2, 1, 'meow'])).to.equal('meow');
    });

    it('should return the first even occurrence in an array with multiple even occurrences', function() {
        var array = ['doublerainbow', 'grumpycat', 'grumpycat', 'doublerainbow'];
        expect(evenOccurrence(array)).to.equal('doublerainbow');
    });

    it('should return `null` when no items occur an even number of times', function() {
        var array = ['rob', 'victor', 'fred', 'jess', 'rob', 'rob'];
        expect(evenOccurrence(array)).to.equal(null);
    });
});


describe('Nonrepeated Character', function() {

    it('should return `null` for empty string', function() {
        expect(firstNonRepeatedCharacter('')).to.eql(null);
    });

    it('should return `null` for strings that have every character repeated', function() {
        expect(firstNonRepeatedCharacter('XXXXXXXX')).to.eql(null);
    });

    it('should return the first nonrepeated character in the string `AABCAC`', function() {
        expect(firstNonRepeatedCharacter('AABCAC')).to.eql('B');
    });

    it('should return the first nonrepeating character in the string `ABCA`', function() {
        expect(firstNonRepeatedCharacter('ABCA')).to.eql('B');
    });

    it('should return the first nonrepeating character in the string `AAAACX`', function() {
        expect(firstNonRepeatedCharacter('AAAACX')).to.eql('C');
    });

    it('should return the first nonrepeating character in the string `AABCABD`', function() {
        expect(firstNonRepeatedCharacter('AABCABD')).to.eql('C');
    });
});


describe('Common Characters', function() {

    it('should return common characters for simple strings', function() {
        // the common characters between 'abc' and 'abc' should be 'abc'
        expect(commonCharacters('abc', 'abc')).to.eql('abc');
        expect(commonCharacters('ab', 'bc')).to.eql('b');
    });

    it('should return the common characters in the order they appear', function() {
        // the resulting common character string should be sorted in the order the
        // characters appear (not alphabetically)
        expect(commonCharacters('zyx', 'xzy')).to.eql('zyx');
    });

    it('should return the original string for repeated versions of a characters', function() {
        // the common characters between 'aeiou' and 'aaeeiioouu' shold be 'aeiou'
        expect(commonCharacters('aeiou', 'aaeeiioouu')).to.eql('aeiou');
    });

    it('should return "" if the first string is ""', function() {
        expect(commonCharacters('', 'eiauo')).to.eql(''); // '' and 'eiauo' have no common characters
    });

    it('should return the common characters for this anagram', function() {
        var string1 = 'all boys love fudge';
        var string2 = 'boys all love fudge';
        // the common characters between 'all boys love fudge' and 'boys all love
        // fudge' should be 'alboysvefudg'
        expect(commonCharacters(string1, string2)).to.eql('alboysvefudg');
    });

    it('should return an empty string when comparing two empty strings', function() {
        // an edge case to watch out for. Its possible someone could try to compare
        // the common strings among two empty strings.
        expect(commonCharacters('', '')).to.eql('');
    });
});

describe('linkedList', function() {
    var linkedList;

    beforeEach(function() {
        linkedList = new LinkedList();
    });

    it('should have a head and tail', function() {
        expect(linkedList).to.have.property("head");
        expect(linkedList).to.have.property("tail");
    });

    it('should have methods named "addToTail", "removeHead", and "contains"', function() {
        expect(linkedList.addToTail).to.be.a("function");
        expect(linkedList.removeHead).to.be.a("function");
        expect(linkedList.contains).to.be.a("function");
    });

    it('should designate a new tail when new nodes are added', function() {
        linkedList.addToTail(4);
        expect(linkedList.tail.value).to.equal(4);
        linkedList.addToTail(5);
        expect(linkedList.tail.value).to.equal(5);
    });

    it('should remove the head from the list when removeHead is called', function() {
        linkedList.addToTail(4);
        linkedList.addToTail(5);
        expect(linkedList.head.value).to.equal(4);
        linkedList.removeHead();
        expect(linkedList.head.value).to.equal(5);
    });

    it("should return the value of the former head when removeHead is called", function() {
        linkedList.addToTail(4);
        expect(linkedList.removeHead()).to.equal(4);
    });

    it("should contain a value that was added", function() {
        linkedList.addToTail(4);
        linkedList.addToTail(7);
        linkedList.addToTail(5);
        expect(linkedList.contains(4)).to.equal(true);
        expect(linkedList.contains(5)).to.equal(true);
        expect(linkedList.contains(7)).to.equal(true);
        expect(linkedList.contains(6)).to.equal(false);
    });

    it('should not contain a value that was removed', function() {
        linkedList.addToTail(4);
        linkedList.addToTail(5);
        linkedList.removeHead();
        expect(linkedList.contains(4)).to.equal(false);
    });

    // add more tests here to test the functionality of linkedList
});

describe('Delete Node from linked list', function() {
    it('should delete the node from the linked list', function() {

        function LinkedListNode(value) {
            this.value = value;
            this.next = null;
        }

        var a = new LinkedListNode('A');
        var b = new LinkedListNode('B');
        var c = new LinkedListNode('C');

        a.next = b;
        b.next = c;

        deleteNode(b);
        expect(a.next.value).to.eql("C");
    });
});





describe('hasCycle', function() {

    it('should be a function', function() {
        expect(hasCycle).to.be.a("function");
    });

    it('should return false for a linked list with only 1 node that ponits to null', function() {
        // aka, A -> null
        var nodeA = Node('A');
        //hasCycle(nodeA).to.equal(false);
        expect(hasCycle(nodeA)).to.equal(false);
    });

    it('should return true for a linked list with only 1 node that points to itself', function() {
        // aka, A -> A -> A -> etc...
        var nodeA = Node('A');
        nodeA.next = nodeA;
        expect(hasCycle(nodeA)).to.equal(true);
    });

    it('should return false for a non-cyclical linked list of size 2', function() {
        // aka, A -> B -> null
        var nodeA = Node('A');
        var nodeB = nodeA.next = Node('B');
        expect(hasCycle(nodeA)).to.equal(false);
    });

    it('should return true for a cyclical linked list of size 2', function() {
        // aka, A -> B -> A -> B -> etc...
        var nodeA = Node('A');
        var nodeB = nodeA.next = Node('B');
        nodeB.next = nodeA;
        expect(hasCycle(nodeA)).to.equal(true);
    });

    it('should return false for a non-cyclical linked list of size 3', function() {
        // aka, A -> B -> C -> null
        var nodeA = Node('A');
        var nodeB = nodeA.next = Node('B');
        var nodeC = nodeB.next = Node('C');
        expect(hasCycle(nodeA)).to.equal(false);
    });

    it('should return true for a cyclical linked list of size 3', function() {
        // aka, A -> B -> C -> A -> B -> etc...
        var nodeA = Node('A');
        var nodeB = nodeA.next = Node('B');
        var nodeC = nodeB.next = Node('C');
        nodeC.next = nodeA;
        expect(hasCycle(nodeA)).to.equal(true);
    });

    it('should return false for a medium sized non-cyclical linked list', function() {
        // aka, start -> tail0 -> tail1 -> ... -> tail8 -> null
        var startNode = Node('start');
        var currentNode = startNode;
        for (var i = 0; i < 9; i++) {
            currentNode.next = Node('tail' + i);
            currentNode = currentNode.next;
        }
        expect(hasCycle(currentNode)).to.equal(false);
    });

    it('should return true for a medium sized cyclical linked list', function() {
        // aka, start -> tail0 -> tail1 -> ... -> tail8 -> start
        var startNode = Node('start');
        var currentNode = startNode;
        for (var i = 0; i < 9; i++) {
            currentNode.next = Node('tail' + i);
            currentNode = currentNode.next;
        }
        // have the tail of the linked list point to the start
        currentNode.next = startNode;
        expect(hasCycle(startNode)).to.equal(true);
    });

    it('should return false for a large sized non-cyclical linked list', function() {
        // aka, start -> tail0 -> tail1 -> ... -> tail99998 -> tail99999 -> null
        var startNode = Node('start');
        var currentNode = startNode;
        // one. million nodes!! wahahahaha
        for (var i = 0; i < 999999; i++) {
            currentNode.next = Node('tail' + i);
            currentNode = currentNode.next;
        }
        expect(hasCycle(startNode)).to.equal(false);
    });

    it('should return true for a large sized cyclical linked list', function() {
        // aka, start -> tail0 -> tail1 -> ... -> tail99998 -> tail99999 -> start
        var startNode = Node('start');
        var currentNode = startNode;
        // one. million nodes!! wahahahaha
        for (var i = 0; i < 999999; i++) {
            currentNode.next = Node('tail' + i);
            currentNode = currentNode.next;
        }
        // have the tail of the linked list point to the start
        currentNode.next = startNode;
        expect(hasCycle(startNode)).to.equal(true);
    });

});




describe('Reverse Linked List', function() {

  var reverseLinkedList;

  beforeEach(function() {
      reverseLinkedList = new ReverseLinkedList();
  });

  it('should have a value and next', function() {
      expect(reverseLinkedList).to.have.property("value");
      expect(reverseLinkedList).to.have.property("next");
  });

  it('should have methods named "reverseLinkedList"', function() {
      expect(reverseLinkedList.reverseLinkedList).to.be.a("function");
  });

  it('should return the last node of a linked list', function() {
      // aka, A -> B -> C -> null
      var nodeA = Node('A');
      var nodeB = nodeA.next = Node('B');
      var nodeC = nodeB.next = Node('C');

      expect(reverseLinkedList.reverseLinkedList(nodeA)).to.equal(nodeC);
  });

});


describe("treeMaker", function() {
    it('should be a function', function() {
        expect(treeMaker).to.be.a("function");
    });

    it('should be implemented in the prototypal style', function() {
        //Are you using Object.create()..?
        var tree = treeMaker();
        expect(tree.addChild).to.be.a("function");
        expect(tree.contains).to.be.a("function");
    });


    it("should add children to the tree", function() {
        var tree = treeMaker();
        tree.addChild(5);
        expect(tree.children[0].value).to.equal(5);
    });

    it("should return true for a value that the tree contains", function() {
        var tree = treeMaker();
        tree.addChild(5);
        expect(tree.contains(5)).to.equal(true);
    });

    it("should return false for a value that was not added", function() {
        var tree = treeMaker();
        tree.addChild(5);
        expect(tree.contains(6)).to.equal(false);
    });

    it("should be able to add children to a tree's child", function() {
        //Each child should itself be an instance of a tree.
        var tree = treeMaker();
        tree.addChild(5);
        tree.children[0].addChild(6);
        expect(tree.children[0].children[0].value).to.equal(6);
    });

    it("should correctly detect nested children", function() {
        var tree = treeMaker();
        tree.addChild(5);
        tree.addChild(6);
        tree.children[0].addChild(7);
        tree.children[1].addChild(8);
        expect(tree.contains(7)).to.equal(true);
        expect(tree.contains(8)).to.equal(true);
    });
});



// describe('BFSelect', function() {
//
//     it('should be a function', function() {
//         expect(Tree.prototype.BFSelect).to.be.a("function");
//     });
//
//     it('should return an array', function() {
//         var root = new Tree('root');
//         var all = function() {
//             return true;
//         };
//         root.BFSelect(all).to.be.a("array");
//     });
//
//     it('should return all nodes in the tree if filter always returns true', function() {
//         // this filter function should always return all of the nodes
//         var all = function() {
//             return true;
//         };
//         var equal
//             // keep a list of all nodes to compare
//             // depth: 0
//         var root = new Tree(1);
//         var expected = [1];
//         // depth: 1
//         expected.push(2);
//         root.addChild(2);
//         expected.push(3);
//         root.addChild(3);
//         // depth: 2
//         expected.push(4);
//         root.children[0].addChild(4);
//         expected.push(5);
//         root.children[0].addChild(5);
//         expected.push(6);
//         root.children[1].addChild(6);
//         expected.push(7);
//         root.children[1].addChild(7);
//         // depth: 3 (sparse)
//         expected.push(8);
//         root.children[0].children[0].addChild(8);
//         expected.push(9);
//         root.children[1].children[1].addChild(9);
//
//         // we should expect back all the nodes we added
//         var result = root.BFSelect(all);
//         result.should.have.length(expected.length);
//
//         // make sure the result array contains all the expected values
//         for (var i = 0; i < expected.length; i++) {
//             // ie., `expected[i]` should be somewhere in `result`
//             result.should.contain(expected[i]);
//         }
//     });
//
//     it('should return all nodes passing the filter', function() {
//         // this filter function should return all true nodes
//         var trueFilter = function(value, depth) {
//             return value === true;
//         };
//         // this filter function should return all false nodes
//         var falseFilter = function(value, depth) {
//             return value === false;
//         };
//         // keep a list of true and false nodes to compare
//         var trueNodes = [],
//             falseNodes = [],
//             result = null;
//         // depth: 0
//         var root = new Tree(false);
//         falseNodes.push(false);
//         // depth: 1
//         trueNodes.push(true);
//         root.addChild(true);
//         falseNodes.push(false);
//         root.addChild(false);
//         // depth: 2
//         trueNodes.push(true);
//         root.children[0].addChild(true);
//         trueNodes.push(true);
//         root.children[1].addChild(true);
//         falseNodes.push(false);
//         root.children[0].addChild(false);
//         falseNodes.push(false);
//         root.children[1].addChild(false);
//         // depth: 3 (sparse)
//         trueNodes.push(true);
//         root.children[0].children[0].addChild(true);
//         trueNodes.push(true);
//         root.children[1].children[0].addChild(true);
//         falseNodes.push(false);
//         root.children[0].children[1].addChild(false);
//         falseNodes.push(false);
//         root.children[1].children[1].addChild(false);
//
//         result = root.BFSelect(trueFilter);
//         // we expect back all the `trueNodes` using the `trueFilter`
//         result.length.should.equal(trueNodes.length);
//         for (var i = 0; i < trueNodes.length; i++) {
//             // ie., `trueNodes[i]` should be somewhere in `result`
//             result.should.contain(trueNodes[i]);
//         }
//
//         result = root.BFSelect(falseFilter);
//         // we expect back all the `falseNodes` using the `falseFilter`
//         result.length.should.equal(falseNodes.length);
//         for (var i = 0; i < falseNodes.length; i++) {
//             result.should.contain(falseNodes[i]);
//         }
//     });
//
//     it('should allow filtering by depth', function() {
//
//         // keep a list of nodes by depth to compare
//         var nodeDepths = [],
//             deepNodes = [];
//         var root = new Tree(0);
//         // depth: 0
//         nodeDepths.push([0]);
//         // depth: 1
//         deepNodes = [];
//         deepNodes.push(1);
//         root.addChild(1);
//         deepNodes.push(2);
//         root.addChild(2);
//         nodeDepths.push(deepNodes);
//         // depth: 2
//         deepNodes = [];
//         deepNodes.push(3);
//         root.children[0].addChild(3);
//         deepNodes.push(4);
//         root.children[0].addChild(4);
//         deepNodes.push(5);
//         root.children[1].addChild(5);
//         deepNodes.push(6);
//         root.children[1].addChild(6);
//         nodeDepths.push(deepNodes);
//         // depth: 3 (sparse)
//         deepNodes = [];
//         deepNodes.push(3);
//         root.children[0].children[0].addChild(3);
//         deepNodes.push(4);
//         root.children[0].children[0].addChild(4);
//         deepNodes.push(5);
//         root.children[1].children[0].addChild(5);
//         deepNodes.push(6);
//         root.children[1].children[0].addChild(6);
//         nodeDepths.push(deepNodes);
//
//         // helper functions for the tests
//
//         // this filter constructor produces a filter for the specified depth
//         var depthFilter = function(filterDepth) {
//             return function(node, nodeDepth) {
//                 return filterDepth === nodeDepth;
//             };
//         };
//
//         // so that `[1, 5, 2]`  and `[5, 2, 1]` are considered equal
//         var shouldBeDeepEqualSorted = function(array1, array2) {
//             array1.sort(function(a, b) {
//                 return a - b
//             });
//             array2.sort(function(a, b) {
//                 return a - b
//             });
//             array1.should.eql(array2); // deep equality
//         };
//
//         // the actual tests
//
//         shouldBeDeepEqualSorted(root.BFSelect(depthFilter(0)), nodeDepths[0]);
//         shouldBeDeepEqualSorted(root.BFSelect(depthFilter(1)), nodeDepths[1]);
//         shouldBeDeepEqualSorted(root.BFSelect(depthFilter(2)), nodeDepths[2]);
//         shouldBeDeepEqualSorted(root.BFSelect(depthFilter(3)), nodeDepths[3]);
//     });
// });
//
// describe('Tree', function() {
//     it('should exist', function() {
//         should.exist(Tree);
//     });
// });
//
// describe('collect', function() {
//     it('should exist on the Tree prototype', function() {
//         should.exist(Tree.prototype.countLeaves);
//     });
//
//     it('should be a function', function() {
//         Tree.prototype.countLeaves.should.be.a.Function;
//     });
//
//     it('should return a number', function() {
//         var root = new Tree('root');
//         root.countLeaves().should.be.a.Number;
//     });
//
//     it('should return 1 if the tree root has no children', function() {
//         // make a one-node tree
//         var root = new Tree();
//         // an empty root node is technically a leaf
//         root.countLeaves().should.equal(1);
//     });
//
//     it('should return 2 if the root has two children', function() {
//         var root = new Tree();
//         // add two children
//         root.addChild(new Tree());
//         root.addChild(new Tree());
//         // both children are now leaves
//         root.countLeaves().should.equal(2);
//     });
//
//     it('should still return 2 if one branch has one leaf', function() {
//         var root = new Tree();
//         // add a leaf
//         root.addChild(new Tree());
//         // add a branch
//         var branch = new Tree();
//         root.addChild(branch);
//         // add a leaf to the branch
//         branch.addChild(new Tree());
//
//         // still only two leaves
//         root.countLeaves().should.equal(2);
//     });
//
//     it('should return 4 if both branches have two leaves', function() {
//         var root = new Tree();
//         // add a branch
//         var branch1 = new Tree();
//         root.addChild(branch1);
//         // add two leaves to the branch
//         branch1.addChild(new Tree());
//         branch1.addChild(new Tree());
//         // add another branch
//         var branch2 = new Tree();
//         root.addChild(branch2);
//         // add two leaves to the branch
//         branch2.addChild(new Tree());
//         branch2.addChild(new Tree());
//
//         // if you're counting, that's four leaves
//         root.countLeaves().should.equal(4);
//     });
//
//     it('should count leaves on a big tree', function() {
//         // keep a list of nodes by depth to compare
//         var root = new Tree();
//         // branches
//         var branch1 = new Tree();
//         var branch2 = new Tree();
//         root.addChild(branch1);
//         root.addChild(branch2);
//         // branches
//         var branch3 = new Tree();
//         var branch4 = new Tree();
//         branch1.addChild(branch2);
//         branch1.addChild(branch3);
//         // branches
//         var branch5 = new Tree();
//         var branch6 = new Tree();
//         branch3.addChild(branch5);
//         branch3.addChild(branch6);
//
//         // leaves
//         branch2.addChild(new Tree());
//         branch2.addChild(new Tree());
//         branch4.addChild(new Tree());
//         branch4.addChild(new Tree());
//         branch5.addChild(new Tree());
//         branch5.addChild(new Tree());
//         branch6.addChild(new Tree());
//         branch6.addChild(new Tree());
//
//         // so that's eight leaves
//         root.countLeaves().should.equal(8);
//     });
//
// });

// describe('longestRun', function () {
//
//   it('should return an array', function () {
//     longestRun('abc').to.equal(true);
//   });
//
//   it('should return an array with only two elements', function(){
//     // the length of the result array should always have exactly two elements.
//     // that contain the `start` and `end` indices in the original string.
//     longestRun('abc').to.equal(true);
//     longestRun('aabbbc').to.equal(2);
//   });
//
//   it('should return an array with the `start` and `end` index', function(){
//     longestRun('abbbcc')to.equal([1, 3]);
//     longestRun('aabbc')to.equal([0, 1]);
//     longestRun('abcd')to.equal([0, 0]);
//   });
//
//   it('should work for long strings', function(){
//     // `repeat` returns a string with the `input` string repeated `n` times
//     // ie., repeat('v', 3) would return 'vvv'
//     function repeat(input, n){
//       var output = ''
//       for(var i = 0; i < n; i++){
//         output = output + input
//       }
//       return output
//     }
//     var aaaa = repeat('a', 342);  // repeat `a` 342 times
//     var jjjj = repeat('j', 583);  // repeat `j` 583 times
//     var zzzz = repeat('z', 1000); // repeat `z` 1000 times
//     var input = aaaa + zzzz + jjjj;
//     longestRun(input).to.equal([342, 1341]);
//   })
//
//   it('should handle the edge-case of an empty string', function(){
//     // watch out for edge-cases! the longest run of an empty string is [0, 0]
//     longestRun('').to.equal([0, 0]);
//   });
// });
