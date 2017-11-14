/*jshint eqnull:true, expr:true*/

var _ = {};

(function() {
    // return sub(0, array.length);
    /*
     * Given a sorted array, find the index of an element
     * using a binary search algorithm.
     *
     * Example usage:
     *
     * var index = binarySearch([1, 2, 3, 4, 5], 4);
     * console.log(index); // [3]
     */
    // var sub = function(low, high) {
    //     if (low === high) {
    //         return null;
    //     }
    //     var mid = Math.floor((high - low) / 2) + low;
    //
    //     if (array[mid] === target) {
    //         return mid;
    //     } else if (target < array[mid]) {
    //         return sub(low, mid);
    //     } else {
    //         return sub(mid, high);
    //     }
    // };

    binarySearch = function(array, target) {
        var subSearch = function(low, high) {
            if (low === high) {
                return null;
            }
            var middle = Math.floor((high - low) / 2) + low;

            if (array[middle] === target) {
                return middle;
            } else if (target < array[middle]) {
                return subSearch(low, middle);
            } else if (target > array[middle]) {
                return subSearch(middle, high);
            }
        };
        return subSearch(0, array.length);
    };

    /*
     * Given a sorted array that has been rotated some number of items right or
     * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
     * how can you efficiently find an element? For simplicity, you can assume
     * that there are no duplicate elements in the array.
     *
     * rotatedArraySearch should return the index of the element if it is in the
     * array and should return null otherwise.
     *
     * For instance:
     * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
     *
     * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
     *
     * Target time complexity: O(log(array.length))
     */
    // var left = 0;
    // var right = rotated.length - 1;
    //
    // // Just a straight binary search.
    // while (left <= right) {
    //     var middle = Math.floor((right + left) / 2);
    //
    //     // We have found our target.
    //     if (rotated[middle] === target) {
    //         return middle;
    //     }
    //
    //     // The clever part starts here:
    //     if (rotated[left] <= rotated[middle]) {
    //         // If the middle element is greater than the element to the left
    //         // of it, then that means that the bottom half is strictly increasing
    //         // from left to middle, i.e. it is sorted and we can just do a normal
    //         // binary search.
    //
    //         // Is the target in this range?
    //         if (rotated[left] <= target && target < rotated[middle]) {
    //             // 'recurse' down this side
    //             right = middle - 1;
    //         } else {
    //             // 'recurse' down the other side
    //             left = middle + 1;
    //         }
    //     } else {
    //         // This means that the *top* half must be sorted, because
    //         // there can only be one place in the entire array where
    //         // the order is not sorted, and it's on the bottom half.
    //
    //         if (rotated[middle] < target && target <= rotated[right]) {
    //             // 'recurse' down this side
    //             left = middle + 1;
    //         } else {
    //             // 'recurse' down the other side
    //             right = middle - 1;
    //         }
    //
    //     }
    // }

    rotatedArraySearch = function(rotated, target) {
        var left = 0;
        var right = rotated.length - 1;
        //while left is less than or equal to the right
        while (left <= right) {
            //get the middle value
            var middle = Math.floor((left + right) / 2);
            //if the value of the middle value is equal to the targt return it
            if (rotated[middle] === target) {
                return middle;
            }

            //if the left value is less than the middle value
            if (rotated[left] < rotated[middle]) {
                //if the left vlaue is less than or equal to the target
                //and the target is less than or equal to the middle value
                if (rotated[left] <= target && target <= rotated[middle]) {
                    //the right becomes the middle minus 1
                    right = middle - 1;
                } else {
                    //else the left becomes the middle plus one
                    left = middle + 1;
                }
            } else {
                //if the right value is greater than or equal to the target
                //and the target is greater than or equal to the middle value
                if (rotated[right] >= target && target >= rotated[middle]) {
                    //the left becomes the middle plus one
                    left = middle + 1;
                } else {
                    //else the right becomes the middle minus one
                    right = middle - 1;
                }
            }
        }
        //return null if target is not in the array
        return null;
    };
    /*
     * Bubble sort is the most basic sorting algorithm in all of Computer
     * Sciencedom. It works by starting at the first element of an array and
     * comparing it to the second element; if the first element is greater than the
     * second element, it swaps the two. It then compares the second to the third,
     * and the third to the fourth, and so on; in this way, the largest values
     * "bubble" to the end of the array. Once it gets to the end of the array, it
     * starts over and repeats the process until the array is sorted numerically.
     *
     * Implement a function that takes an array and sorts it using this technique.
     * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
     *
     * QUERY: What's the time complexity of your algorithm? If you don't already
     * know, try to intuit this without consulting the Googles.
     *
     * Extra credit: Optimization time! During any given pass, if no elements are
     * swapped we can assume the list is sorted and can exit the function early.
     * After this optimization, what is the time complexity of your algorithm?
     *
     * Moar credits: Do you need to consider every element every time you iterate
     * through the array? Make it happen, boss. Again: Has the time complexity of
     * your algorithm changed?
     */

    /*
     * Example usage:
     * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
     *
     */
    // if (!Array.isArray(array)) {
    //     throw new TypeError("bubbleSort accepts only arrays");
    // }
    //
    // var length = array.length;
    //
    // for (var i = 0; i < length; i++) {
    //     for (var j = 0; j < length - 1 - i; j++) {
    //         if (array[j] > array[j + 1]) {
    //             bubbleSortSwap(j, j + 1, array);
    //         }
    //     }
    // }
    // return array;

    // Introduce i into the global scope so we can test function efficiency
    var i;

    // Feel free to add helper functions if needed.
    /* START SOLUTION */

    function bubbleSortSwap(index1, index2, array) {
        var temp = array[index2];
        array[index2] = array[index1];
        array[index1] = temp;
    }
    /* END SOLUTION */

    bubbleSort = function(array) {
        if (!Array.isArray(array)) {
            return 'Array must be an array!';
        }

        var length = array.length;
        var arrayCopy = array.slice();

        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                if (arrayCopy[j] > arrayCopy[j + 1]) {
                    bubbleSortSwap(j, j + 1, arrayCopy);
                }
            }
        }

        return arrayCopy;
    };

    /**
    Selection sort loops over indices in the array; for each index, selection sort calls indexOfMinimum and swap.
    If the length of the array is n, there are n indices in the array.
    Since each execution of the body of the loop runs two lines of code, you might think that 2 n 2n2, n lines of code are executed by selection sort.
    But it's not true! Remember that indexOfMinimum and swap are functions: when either is called, some lines of code are executed.
    How many lines of code are executed by a single call to swap?
    In the usual implementation, it's three lines, so that each call to swap takes constant time.
    How many lines of code are executed by a single call to indexOfMinimum?
    We have to account for the loop inside indexOfMinimum. How many times does this loop execute in a given call to indexOfMinimum? It depends on the size of the subarray that it's iterating over.
    If the subarray is the whole array (as it is on the first step), the loop body runs n nn times.
    If the subarray is of size 6, then the loop body runs 6 times.
    For example, let's say the whole array is of size 8 and think about how selection sort works.
    In the first call of indexOfMinimum, it has to look at every value in the array, and so the loop body in indexOfMinimum runs 8 times.
    In the second call of indexOfMinimum, it has to look at every value in the subarray from indices 1 to 7, and so the loop body in indexOfMinimum runs 7 times.
    In the third call, it looks at the subarray from indices 2 to 7; the loop body runs 6 times.
    In the fourth call, the subarray from indices 3 to 7; the loop body runs 5 times.
    …
    In the eighth and final call of indexOfMimimum, the loop body runs just 1 time.
    If we total up the number of times the loop body of indexOfMinimum runs, we get 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36 times.
    Side note: Computing summations from 1 to n nn

    How do you compute the sum 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 quickly? Here's a trick.
    Let's add the numbers in a sneaky order. First, let's add 8 + 1, the largest and smallest values.
    We get 9. Then, let's add 7 + 2, the second-largest and second-smallest values. Interesting, we get 9 again. How about 6 + 3? Also 9. Finally, 5 + 4. Once again, 9! So what do we have?
    \begin (8 + 1) + (7 + 2) + (6 + 3) + (5 + 4) &= 9 + 9 + 9 + 9 \\ &= 4 \cdot 9 \\ &= 36 \ . \end
    ​(8+1)+(7+2)+(6+3)+(5+4) = 9+9+9+9 = 4⋅9 =36 .
    ​​
    There were four pairs of numbers, each of which added up to 9. So here's the general trick to sum up any sequence of consecutive integers:
    Add the smallest and the largest number.
    Multiply by the number of pairs.
    What if the number of integers in the sequence is odd, so that you cannot pair them all up? It doesn't matter! Just count the unpaired number in the middle of the sequence as half a pair.
    For example, let's sum up 1 + 2 + 3 + 4 + 5.
    We have two full pairs (1 + 5 and 2 + 4, each summing to 6) and one "half pair" (3, which is half of 6), giving a total of 2.5 pairs.
    We multiply 2.5 \cdot 6 = 15 2.5⋅6=152, point, 5, dot, 6, equals, 15, and we get the right answer.
    What if the sequence to sum up goes from 1 to n nn? We call this an arithmetic series.
    The sum of the smallest and largest numbers is n + 1 n+1n, plus, 1.
    Because there are n nn numbers altogether, there are n/2 n/2n, slash, 2 pairs (whether n nn is odd or even).
    Therefore, the sum of numbers from 1 to n nn is (n + 1)(n / 2) (n+1)(n/2)left parenthesis, n, plus, 1,
    right parenthesis, left parenthesis, n, slash, 2, right parenthesis, which equals n^2/2 + n/2 n2
    ​​ /2+n/2n, start superscript, 2, end superscript, slash, 2, plus, n, slash, 2.
    Try out this formula for n = 5 n=5n, equals, 5 and n = 8 n=8n, equals, 8.
    Asymptotic running-time analysis for selection sort

    The total running time for selection sort has three parts:
    The running time for all the calls to indexOfMinimum.
    The running time for all the calls to swap.
    The running time for the rest of the loop in the selectionSort function.
    Parts 2 and 3 are easy. We know that there are n nn calls to swap, and each call takes constant time.
    Using our asymptotic notation, the time for all calls to swap is \Theta(n) Θ(n).
    The rest of the loop in selectionSort is really just testing and incrementing the loop variable and calling indexOfMinimum and swap, and so that takes constant time for each of the n nn iterations, for another \Theta(n) Θ(n) time.
    For part 1, the running time for all the calls to indexOfMinimum, we've already done the hard part.
    Each individual iteration of the loop in indexOfMinimum takes constant time.
    **/

    selectionSort = function(array) {
        var arrayCopy = array.slice();

        for (var i = 0; i < arrayCopy.length; i++) {
            var minIndex = indexOfMinimum(arrayCopy, i);
            selectionSortSwap(arrayCopy, i, minIndex);
        }

        return arrayCopy;
    };

    function indexOfMinimum(array, startIndex) {
        var minIndex = startIndex;
        var minValue = array[minIndex];
        for (var i = minIndex; i < array.length; i++) {
            if (array[i] < minValue) {
                minIndex = i;
                minValue = array[i];
            }
        }
        return minIndex;
    }

    function selectionSortSwap(array, firstIndex, secondIndex) {
        var temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    }

    /**
     * Insertion sort is a basic sorting algorithm.
     *
     * Insertion sort iterates over an array, growing a sorted array behind the current location.
     * It takes each element from the input and finds the spot, up to the current point,
     * where that element belongs. It does this until it gets to the end of the array.
     *
     * Insertion sort should be implemented as a stable sort. This means that equal elements
     * should retain their relative order. Numbers, as primitives, give us no way to check this,
     * so we'll be sorting objects with a value field, on which they will be sorted, like so:
     *
     * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
     *
     * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
     *
     **/

    insertionSort = function(array) {
        //make a copy of the array
        var arrayCopy = array.slice();
        //iterate over the array
        for (var i = 0; i < arrayCopy.length; i++) {
            //call insertion with the value, index, and array(list)
            insertion(arrayCopy[i], i, arrayCopy);
        }

        return arrayCopy;
    };

    //insertions takes a value, a right index, and a list(array)
    function insertion(value, rightIndex, array) {
        //decrement over the array starting at the right value while j is greater than
        //0 and the value of j - 1 is greater than the value
        for (var j = rightIndex; j > 0 && array[j - 1] > value; j--) {
            //set array element j to value at j -1
            array[j] = array[j - 1];
        }
        //set element j equal to the value
        array[j] = value;
    } //

    /**
     * Implement a function that sorts an array of numbers using the "mergesort" algorithm.
     *
     * Mergesort is an optimized sorting algorithm which is a common choice to implement `sort`
     * methods in standard libraries as an alternative to quicksort or heapsort. (For example,
     * Firefox's Array.sort method uses a tuned mergesort; the WebKit engine used by Chrome and
     * Safari uses quicksort for numeric arrays, and mergesort for arrays of strings.)
     *
     * Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N
     * as a set of N "sublists" of length 1, which are considered to be sorted. Adjacent sublists are then
     * "merged" into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so
     * on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
     * after the first merge, and so on.)
     *
     * This can be implemented using either a recursive ("top-down") or an iterative ("bottom-up") approach.
     *
     * Illustration of an iterative approach:
     *
     *   Initial step: Input array is split into "sorted" sublists
     *   [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]
     *
     *   Merge step: Adjacent sublists are merged into sorted sublists
     *   [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]
     *
     *   Repeat merge step:
     *   [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]
     *
     *   Repeat merge step:
     *   [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]
     *
     *   Done! Return the sorted array:
     *   [1,2,3,4,4,7,9]
     * Illustration of a recursive approach:
     *
     *   1. Split the input array in half
     *   [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2]
     *
     *   2. Both sides are sorted recursively:
     *   [4, 7, 4] -> [4, 4, 7]
     *   [3, 9, 1, 2] -> [1, 2, 3, 9]
     *
     *   3. Both halves are merged:
     *   [4, 7, 4], [3, 9, 1, 2] -> [1, 2, 3, 4, 4, 7, 9]
     *
     *   Step 2 might seem a bit mystical - how do we sort both sides? The
     *   simple answer is that we use mergesort! After all, mergesort sorts
     *   arrays, right? We can test this on [4, 7, 4] by just following the
     *   steps above but imagining that [4, 7, 4] is the whole array, which
     *   is what happens when you call mergesort on it.
     *
     *   1. Split the input array in half
     *   [4, 7, 4] -> [4], [7, 4]
     *
     *   2. Both sides are sorted recursively:
     *   [4] -> [4]
     *   [7, 4] -> [4, 7]
     *
     *   3. Both halves are merged:
     *   [4], [4, 7] -> [4, 4, 7]
     *
     *   I cheated again by going directly from [7, 4] to [4, 7], but that's
     *   really just:
     *
     *   1. Split the input array in half
     *   [7, 4] -> [7], [4]
     *
     *   2. Both sides are sorted recursively:
     *   [7] -> [7]
     *   [4] -> [4]
     *
     *   3. Both halves are merged:
     *   [7], [4] -> [4, 7]
     *
     *   As you can see, all the work actually gets done in step 3, the merge
     *   step. Everything else is just splitting and recursing.
     *
     */ var merge = function(
        left,
        right,
    ) {
        var output = [];
        //while both lists have a length
        while (left.length && right.length) {
            //if the frist value of the lft list is less than the right list push it on
            //the output array, and vice versa
            left[0] < right[0]
                ? output.push(left.shift())
                : output.push(right.shift());
        }
        //concationate the left and right list onto a return list, just in case
        //there's a remaing item in either list
        var returnOutput = output.concat(left).concat(right);

        //return the new concationated list
        return returnOutput;
    };

    mergeSort = function(list) {
        //get the middle index of the list
        var middle = Math.floor(list.length / 2);
        //create right and left sublists from the list
        var leftList = list.slice(0, middle);
        var rightList = list.slice(middle);
        //base case: if the list lenght is less than 2 return the list
        if (list.length < 2) {
            return list;
        }
        //return merge calling it with mergeSort on th left and right list
        return merge(mergeSort(leftList), mergeSort(rightList));
    };

    // mergeSort = function(array) {
    //     var lists = [];
    //     // Split array into sublists
    //     // Natural variant: split array into pre-sorted sublists
    //     var currentList = [];
    //     lists = []
    //     for (var i = 0; i < array.length; i++) {
    //         if (currentList.length && array[i] < currentList[currentList.length - 1]) {
    //             lists.push(currentList);
    //             currentList = [];
    //         }
    //         currentList.push(array[i]);
    //     }
    //     lists.push(currentList);
    //     // Until the entire array is sorted
    //     while (lists.length > 1) {
    //         var newLists = [];
    //         // Merge all adjacent lists
    //         for (var i = 0; i < Math.floor(lists.length / 2); i++) {
    //             newLists.push(merge(lists[i * 2], lists[i * 2 + 1]))
    //         }
    //         // Include the leftover list if the number is odd
    //         if (lists.length % 2) {
    //             newLists.push(lists[lists.length - 1]);
    //         }
    //         lists = newLists;
    //     }
    //     // we have a single, fully sorted list
    //     return lists[0];
    //     /* END SOLUTION */
    // };

    /**
     * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
     *
     * It:
     *    Takes in an array.
     *    Picks a value in the array as a pivot.
     *    Partitions all the elements of the array into two arrays, based on
     *      if they are larger or smaller than the pivot.
     *    Recursively sorts the two halves.
     *    Combines the two arrays and the pivot into a sorted array.
     */

    // function quickSort(items, left, right) {
    //
    //     var index;
    //
    //     if (items.length > 1) {
    //
    //         index = partition(items, left, right);
    //
    //         if (left < index - 1) {
    //             quickSort(items, left, index - 1);
    //         }
    //
    //         if (index < right) {
    //             quickSort(items, index, right);
    //         }
    //
    //     }
    //
    //     return items;
    // }

    //quicksort is a function that takes an array and a left and right index
    quicksort = function(array, left, right) {
        //if the left index is less the right index
        if (left < right) {
            //call the partition function with the left and the right index
            var index = partition2(array, left, right);
            //call quick sort twice. Once for the left half, minus the partion
            //the other for the right half
            quicksort(array, left, index - 1);
            quicksort(array, index + 1, right);
        }
        //return the array
        return array;
    };

    var quicksortSwap = function(array, firstIndex, secondIndex) {
        var temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    };

    var partition1 = function(array, left, right) {
        //the partition is going to be the left index
        var partition = left;
        //iterate though the array, starting at the left index,
        //while it's less than the right index
        for (var nextToCompare = left; nextToCompare < right; nextToCompare++) {
            //if the value of the array at the iterator is less that the value
            //of the array at the right postition, swap the values at nextToCompare and the partition
            //increment the partition by one
            if (array[nextToCompare] < array[right]) {
                quicksortSwap(array, nextToCompare, partition);
                partition++;
            }
        }
        //before returning the partion value swap the iterator and the partition
        //locking the partions into it's correct place
        quicksortSwap(array, nextToCompare, partition);
        return partition;
    };

    function partition2(array, left, right) {
        //get the floor of the middle index by sutracting the
        //right from the left and dividing by 2
        var middle = Math.floor((right - left) / 2);
        //get the value of middle index
        var middleValue = array[middle];
        //while left is less than or equal to the right index
        while (left <= right) {
            //while the left value of the array is less that the middle value
            //increment the left index by one
            while (array[left] < middleValue) {
                left++;
            }

            //while the right value of the array greater that the middle value
            //decrement the left index by one
            while (array[right] > middleValue) {
                right--;
            }

            //if left is less than or equal to right
            if (left <= right) {
                //swap left and right
                quicksortSwap(array, left, right);
                //increment left
                left++;
                //decrement right
                right--;
            }
        }

        //return left
        return left;
    }

    /**
     * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
     * subsequent number is the sum of the previous two.
     *
     * For example, the first five Fibonacci numbers are:
     *
     *   0 1 1 2 3
     *
     * If n were 4, your function should return 3; for 5, it should return 5.
     *
     * Write a function that accepts a number, n, and returns the nth Fibonacci
     * number. Use a recursive solution to this problem; if you finish with time
     * left over, implement an iterative solution.
     *
     * example usage:
     * nthFibonacci(2); // => 1
     * nthFibonacci(3); // => 2
     * nthFibonacci(4); // => 3
     * etc...
     *
     */

    nthFibonacci = function(n) {
        var fibs = [0, 1];
        for (; n > 1; n--) {
            fibs.push(fibs.shift() + fibs[0]);
        }
        return fibs[n];
    };

    /* START SOLUTION */
    // slow, recusrive (exponential time complexity) solution
    // uncomment to make sure the tests fail for this case
    // var nthFibonacci = function(n) {
    //   // Your code here
    //   return n < 2 ? n : nthFibonacci(n-1) + nthFibonacci(n-2);
    // };
    /* END SOLUTION */

    /*
    * Write a function that generates every sequence of throws a single
    * player could throw over a three-round game of rock-paper-scissors.
    *
    * Your output should look something like:
    *   [["rock", "rock", "rock"],
    *    ["rock", "rock", "paper"],
    *    ["rock", "rock", "scissors"],
    *    ["rock", "paper", "rock"],
                 ...etc...
         ]
    *
    * Extra credit:
    *   - Make your function return answers for any number of rounds.
    * Example:
    * rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
    *
    */

    rockPaperScissors = function(rounds) {
        var rounds = rounds || 3;
        var results = [];
        var plays = ['rock', 'paper', 'scissors'];

        var createPlays = function(playedSoFar, roundsLeft) {
            if (roundsLeft === 0) {
                results.push(playedSoFar);
                return;
            }

            for (var i = 0; i < plays.length; i++) {
                var currentPlay = plays[i];
                createPlays(playedSoFar.concat(currentPlay), roundsLeft - 1);
            }
        };

        createPlays([], rounds);
        return results;
    };

    /*
     * Each number key on a standard phone keypad has a set of Latin letters written on
     * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
     *
     * Businesses often try to come up with clever ways to spell out their phone number
     * in advertisements to make it more memorable. But there are a lot of combinations!
     *
     * Write a function that takes up to four digits of a phone number, and
     * returns a list of all of the words that can be written on the phone with
     * that number. (You should return all permutations, not only English words.)
     *
     * Example:
     *   telephoneWords('2745');
     *   => ['APGJ',
     *        'APGK',
     *        'APGL',
     *        ..., // many many more of these
     *        'CSIL']
     *
     * Tips:
     *   - Phone numbers are strings! (A phone number can start with a zero.)
     *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
     *   - Don't return every combination of those digits in any order, just the order given.
     *
     *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
     *  Why not filter your results to only return words contained in that file?
     *
     */

    var phoneDigitsToLetters = {
        0: '0',
        1: '1',
        2: 'ABC',
        3: 'DEF',
        4: 'GHI',
        5: 'JKL',
        6: 'MNO',
        7: 'PQRS',
        8: 'TUV',
        9: 'WXYZ',
    };

    telephoneWords = function(digitString) {
        var words = [];

        var createWords = function(wordSoFar, digitsLeft) {
            if (digitsLeft.length === 0) {
                words.push(wordSoFar);
                return;
            }

            var currentDigit = digitsLeft[0];
            var remainDigits = digitsLeft.slice(1);
            var letters = phoneDigitsToLetters[currentDigit].split('');

            for (var i = 0; i < letters.length; i++) {
                var currentLetter = letters[i];
                createWords(wordSoFar + currentLetter, remainDigits);
            }
        };

        createWords('', digitString.split(''));
        return words;
    };

    /**
     * Given a single input string, write a function that produces all possible anagrams
     * of a string and outputs them as an array. At first, don't worry about
     * repeated strings.  What time complexity is your solution?
     *
     * Extra credit: Deduplicate your return array without using uniq().
     */

    /**
     * example usage:
     * var anagrams = allAnagrams('abc');
     * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
     */

    allAnagrams = function(string) {
        var uniqueOutput = {};

        var anagram = function(ana, str) {
            if (str === '') {
                uniqueOutput[ana] = 1;
            }
            for (var i = 0; i < str.length; i++) {
                var str1 = str.slice(0, i);
                var str2 = str.slice(i + 1);
                anagram(ana + str[i], str1 + str2);
            }
        };

        anagram('', string);
        var uniqueOutputKeys = Object.keys(uniqueOutput);
        return uniqueOutputKeys;
    };

    /**
     *
     *  A robot located at the top left corner of a 5x5 grid is trying to reach the
     *  bottom right corner. The robot can move either up, down, left, or right,
     *  but cannot visit the same spot twice. How many possible unique paths are
     *  there to the bottom right corner?
     *
     *  make your solution work for a grid of any size.
     *
     */

    // A Board class will be useful

    var makeBoard = function(n) {
        var board = [];
        for (var i = 0; i < n; i++) {
            board.push([]);
            for (var j = 0; j < n; j++) {
                board[i].push(false);
            }
        }
        board.togglePiece = function(i, j) {
            this[i][j] = !this[i][j];
        };
        board.hasBeenVisited = function(i, j) {
            return !!this[i][j];
        };
        return board;
    };

    robotPaths = function(n) {
        /* START SOLUTION */
        if (n === 0) {
            return 0;
        }

        var count = 0;
        var board = makeBoard(n);

        var recurse = function(i, j) {
            if (i === n - 1 && j === n - 1) {
                count++;
                return;
            }
            board.togglePiece(i, j);
            if (j < n - 1 && !board.hasBeenVisited(i, j + 1)) {
                recurse(i, j + 1);
            }
            if (j > 0 && !board.hasBeenVisited(i, j - 1)) {
                recurse(i, j - 1);
            }
            if (i < n - 1 && !board.hasBeenVisited(i + 1, j)) {
                recurse(i + 1, j);
            }
            if (i > 0 && !board.hasBeenVisited(i - 1, j)) {
                recurse(i - 1, j);
            }
            board.togglePiece(i, j);
        };

        recurse(0, 0);
        return count;
        /* END SOLUTION */
    };

    multiplyMartix = function(a, b) {
        var aRows = a.length;
        var aCols = a[0].length;
        var bRows = b.length;
        var bCols = b[0].length;
        var newMatrix = [];

        for (var r = 0; r < aRows; r++) {
            newMatrix[r] = [];
            for (var c = 0; c < bCols; c++) {
                newMatrix[r][c] = 0;
                for (var i = 0; i < aCols; i++) {
                    newMatrix[r][c] += a[r][i] * b[i][c];
                }
            }
        }
        return newMatrix;
    };

    /**
     * Write a function that rotates a NxN matrix 90 degrees.
     *
     * A matrix, also called a 2-D array, is simply an array of arrays of values.
     *
     * Example 1x1 matrix:
     *   [ [1] ]
     *
     * Example 2x2 matrix:
     *  [ [1,2],
     *    [3,4] ]
     *
     * Important note:
     *   In mathematics, and generally in CS, matrices are identified as m-by-n, where m is
     *   the number of *rows* and n is the number of *columns*. So an [i][j] address in a matrix
     *   will be i places down, and j places over. This usually matches the way arrays are
     *   addressed in code, but keep in mind that it differs from use in geometry and computer
     *   graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
     *
     * Example rotation of a 4x4 matrix:
     *
     * var matrix = [
     *  [1,2,3,4],
     *  [5,6,7,8],
     *  [9,'A','B','C'],
     *  ['D','E','F','G']
     * ];
     * matrix[0][0]; // 1
     * matrix[3][2]; // 'F'
     *
     * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
     * // rotatedMatrix is:
     * [ ['D',9,5,1],
     *  ['E','A',6,2],
     *  ['F','B',7,3],
     *  ['G','C',8,4]
     * ]
     * rotatedMatrix[0][0]; // 'D'
     * rotatedMatrix[3][2]; // 8
     *
     * Extra credit:
     *  - Make your function operate on rectangular matrices (MxN rather than NxN).
     *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
     */

    rotateMatrix = function(matrix, direction) {
        //console.log(matrix);
        var direction = direction || 1;
        var n = matrix[0] && matrix[0].length;
        var m = matrix.length;
        var output = [];

        for (var i = 0; i < n; i++) {
            output[i] = [];
            for (var j = 0; j < m; j++) {
                if (direction > 0) {
                    output[i][j] = matrix[m - j - 1][i];
                } else if (direction < 0) {
                    output[i][j] = matrix[j][n - i - 1];
                }
            }
        }

        return output;
    };

    findLongestPalendrome = function(string) {
        var longestPalendrome = '';
        for (var i = 0; i < string.length; i++) {
            for (var j = i + 1; j < string.length + 1; j++) {
                var subString = string.substring(i, j);
                //console.log(subString);
                if (isPalendrome(subString)) {
                    if (subString.length > longestPalendrome.length) {
                        longestPalendrome = subString;
                    }
                }
            }
        }
        return longestPalendrome;
    };

    function isPalendrome(string) {
        var len = Math.ceil(string.length / 2);
        for (var i = 0; i < len; i++) {
            if (string[i] !== string[string.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }

    /*
     * example usage:
     * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
     * console.log(onlyEven); //  4
     */

    evenOccurrence = function(arr) {
        var hash = {};
        for (var i = 0; i < arr.length; i++) {
            hash[arr[i]] = !hash[arr[i]];
        }
        console.log(hash);
        for (var j = 0; j < arr.length; j++) {
            if (!hash[arr[j]]) return arr[j];
        }
        return null;
    };

    /**
     * Given an arbitrary input string, return the first nonrepeated character in
     * the string. For example:
     *
     *   firstNonRepeatedCharacter('ABA'); // => 'B'
     *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
     */

    firstNonRepeatedCharacter = function(string) {
        var mem = {};
        var c;
        for (var i = 0; i < string.length; i++) {
            var c = string[i];
            if (!mem[c]) {
                mem[c] = 1;
            } else {
                mem[c]++;
            }
        }

        for (var j = 0; j < string.length; j++) {
            var c = string[j];
            if (mem[c] === 1) {
                return c;
            }
        }

        return null;
    };

    /**
     * Write a function `f(a, b)` which takes two strings as arguments and returns a
     * string containing only the unique characters found in both strings, in the
     * order that they appeared in `a`. Remember to skip spaces and characters you
     * have already encountered!
     *
     * Example: commonCharacters('acexivou', 'aegihobu')
     * Returns: 'aeiou'
     *
     * Extra credit: Extend your function to handle more than two input strings.
     */

    commonCharacters = function(string1, string2) {
        var otherStrings = Array.prototype.slice.call(arguments, 1); //all the other strings

        var charInStr = function(character, str) {
            return str.indexOf(character) > -1;
        };

        // all returns true if for all the elements, fn(el) == true
        var all = function(elements, fn) {
            // use for loop so we can short circuit as soon as we know its not true
            for (var i = 0; i < elements.length; i++) {
                if (!fn.call(this, elements[i])) {
                    return false;
                }
            }
            return true;
        };

        var result = '';
        var alreadyAddedCharacters = {};

        // loop through every character of first_string
        string1.split('').forEach(function(character, index) {
            if (alreadyAddedCharacters[character] || character === ' ') {
                return;
            }

            // confirm it exists in all string
            var exists = all(otherStrings, function(str) {
                return charInStr(character, str);
            });

            // skip if it does not exist
            if (!exists) {
                return;
            }

            // keep track of characters we've already added
            alreadyAddedCharacters[character] = true;
            // character is in all strings; append the value to result
            result += character;
        });

        return result;
    };

    /*
     * Implement a linked list using the pseudoclassical instantiation pattern.
     *
     * Your linked list should have methods called "addToTail", "removeHead", and "contains."
     *
     */

    // EXAMPLE USAGE:
    // var list = new LinkedList();
    // list.tail.value;   //yields 'null'
    // list.addToTail(4);
    // list.addToTail(5);
    // list.head.value;   //yields '4';
    // list.contains(5);  //yields 'true';
    // list.contains(6);  //yields 'false';
    // list.removeHead(); //yields '4'
    // list.tail.value;   //yields '5';

    LinkedList = function() {
        this.head = null;
        this.tail = null;
    };

    //write methods here!

    LinkedList.prototype.addToTail = function(value) {
        var newNode = this.makeNode(value);
        if (!this.head) {
            this.head = newNode;
        }

        if (this.tail) {
            this.tail.next = newNode;
        }

        this.tail = newNode;
    };

    LinkedList.prototype.removeHead = function() {
        if (!this.head) {
            return null;
        }

        var currentHead = this.head;

        if (this.head === this.tail) {
            this.head = this.tail = null;
        }

        if (this.head) {
            this.head = this.head.next;
        }

        return currentHead.value;
    };

    LinkedList.prototype.contains = function(target) {
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === target) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    };

    LinkedList.prototype.makeNode = function(value) {
        var node = {};
        node.value = value;
        node.next = null;
        return node;
    };

    //22) Delete Node
    //Delete a node from a singly-linked list, given only a variable pointing to that node.
    //We can do this in O(1)O(1) time and space! But our answer is tricky, and it could have some side effects...

    //It might be tempting to try to traverse the list from the beginning until we encounter the node we want to delete.
    //But in this situation, we don't know where the head of the list is—we only have a reference to the node we want to delete.

    //But hold on—how do we even delete a node from a linked list in general,
    //when we do have a reference to the first node?

    //We'd change the previous node's pointer to skip the node we want to delete,
    //so it just points straight to the node after it.

    //So we need a way to skip over the current node and go straight to the next node.
    //But we don't even have access to the previous node!

    //Other than rerouting the previous node's pointer, is there another way to skip from the previous pointer's value to the next pointer's value?

    //What if we modify the current node instead of deleting it?

    //We take the value and next from the input node's next node and copy them into the input node.
    //Now the input node's previous node effectively skips the input node's old value!

    deleteNode = function(nodeToDelete) {
        // get the input node's next node, the one we want to skip to
        var nextNode = nodeToDelete.next;

        if (nextNode) {
            // replace the input node's value and pointer with the next
            // node's value and pointer. the previous node now effectively
            // skips over the input node
            nodeToDelete.value = nextNode.value;
            nodeToDelete.next = nextNode.next;
        } else {
            // eep, we're trying to delete the last node!
            throw new Error("Can't delete the last node with this method!");
        }
    };

    /*
     * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
     *
     * Explanation:
     *
     * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
     *
     * A -> B -> C -> D -> E -> null
     *
     * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
     * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
     *
     * A -> B -> C
     *      ^    |
     *      |    v
     *      E <- D
     *
     * Example code:
     *
     * var nodeA = Node('A');
     * var nodeB = nodeA.next = Node('B');
     * var nodeC = nodeB.next = Node('C');
     * var nodeD = nodeC.next = Node('D');
     * var nodeE = nodeD.next = Node('E');
     * hasCycle(nodeA); // => false
     * nodeE.next = nodeB;
     * hasCycle(nodeA); // => true
     *
     * Constraint 1: Do this in linear time
     * Constraint 2: Do this in constant space
     * Constraint 3: Do not mutate the original nodes in any way
     */

    Node = function(value) {
        return {
            value: value,
            next: null,
        };
    };

    hasCycle = function(linkedList) {
        var slow = linkedList;
        var fast = linkedList;
        var paused = true;

        while ((fast = fast.next)) {
            if (fast === slow) {
                return true;
            }
            slow = paused ? slow : slow.next;
            paused = !paused;
        }
        return false;
    };

    //Write a function for reversing a linked list ↴ . Do it in-place ↴ .
    //Your function will have one input: the head of the list.
    //Your function should return the new head of the list.

    //Here's a sample linked list node class:

    ReverseLinkedList = function(value) {
        this.value = value;
        this.next = null;
    };

    ReverseLinkedList.prototype.reverseLinkedList = function(headOfList) {
        var current = headOfList;
        var previous = null;
        var nextNode = null;

        // until we have 'fallen off' the end of the list
        while (current) {
            // copy a pointer to the next element
            // before we overwrite current.next
            nextNode = current.next;

            // reverse the 'next' pointer
            current.next = previous;

            // step forward in the list
            previous = current;
            current = nextNode;
        }

        return previous;
    };

    /* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

    // EXAMPLE USAGE:
    // var tree = treeMaker();
    // tree.addChild(1);
    // tree.addChild(2);
    // tree.contains(2);   // yields 'true'

    treeMaker = function(value) {
        var newTree = Object.create(treeMaker.methods);
        newTree.value = value;
        newTree.children = [];
        return newTree;
    };

    //methods go here!
    treeMaker.methods = {};

    treeMaker.methods.addChild = function(value) {
        var newChild = treeMaker(value);
        this.children.push(newChild);
    };

    treeMaker.methods.contains = function(value) {
        if (this.value === value) {
            return true;
        }

        for (var i = 0; i < this.children.length; i++) {
            if (this.children[i].contains(value)) {
                return true;
            }
        }
        return false;
    };

    /**
     *
     * Implement a `BFSelect` method on this Tree class.
     *
     * BFSelect accepts a filter function, calls that function on each of the nodes
     * in Breadth First order, and returns a flat array of node values of the tree
     * for which the filter returns true.
     *
     * Example:
     *   var root1 = new Tree(1);
     *   var branch2 = root1.addChild(2);
     *   var branch3 = root1.addChild(3);
     *   var leaf4 = branch2.addChild(4);
     *   var leaf5 = branch2.addChild(5);
     *   var leaf6 = branch3.addChild(6);
     *   var leaf7 = branch3.addChild(7);
     *   root1.BFSelect(function (value, depth) {
     *     return value % 2;
     *   })
     *   // [1, 3, 5, 7]
     *
     *   root1.BFSelect(function (value, depth) {
     *     return depth === 1;
     *   })
     *   // [2, 3]
     *
     */

    /*
     * Basic tree that stores a value.
     */

    Tree = function(value) {
        this.value = value;
        this.children = [];
    };

    /* START SOLUTION */
    var Queue = function() {
        var storage = [];

        this.push = function(item) {
            storage.push(item);
        };

        this.pop = function() {
            return storage.shift();
        };
    };
    /* END SOLUTION */

    Tree.prototype.BFSelect = function(filter) {
        // return an array of values for which the function filter(value, depth) returns true
        /* START SOLUTION */
        var queue = new Queue();
        var results = [];
        queue.push({
            tree: this,
            depth: 0,
        });

        while ((item = queue.pop())) {
            tree = item.tree;
            depth = item.depth;
            if (filter(tree.value, depth)) {
                results.push(tree.value);
            }
            for (var i = 0; i < tree.children.length; i++) {
                child = tree.children[i];
                queue.push({
                    tree: child,
                    depth: depth + 1,
                });
            }
        }

        return results;
        /* END SOLUTION */
    };

    /**
     * You shouldn't need to change anything below here, but feel free to look.
     */

    /**
     * add an immediate child
     * (wrap values in Tree nodes if they're not already)
     */
    Tree.prototype.addChild = function(child) {
        if (!child || !(child instanceof Tree)) {
            child = new Tree(child);
        }

        if (!this.isDescendant(child)) {
            this.children.push(child);
        } else {
            throw new Error('That child is already a child of this tree');
        }
        // return the new child node for convenience
        return child;
    };

    /**
     * check to see if the provided tree is already a child of this
     * tree __or any of its sub trees__
     */
    Tree.prototype.isDescendant = function(child) {
        if (this.children.indexOf(child) !== -1) {
            // `child` is an immediate child of this tree
            return true;
        } else {
            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i].isDescendant(child)) {
                    // `child` is descendant of this tree
                    return true;
                }
            }
            return false;
        }
    };

    /**
     * remove an immediate child
     */
    Tree.prototype.removeChild = function(child) {
        var index = this.children.indexOf(child);
        if (index !== -1) {
            // remove the child
            this.children.splice(index, 1);
        } else {
            throw new Error('That node is not an immediate child of this tree');
        }
    };

    longestRun = function(string) {
        // TOD: Your code here!
        /* START SOLUTION */
        var currentCount = 1;
        var topCount = 0;
        var currentStart = 0;
        var topStart = 0;
        var topEnd = 0;
        var topRun = string[0];

        for (var i = 1; i < string.length; i++) {
            if (string[i] == string[i - 1]) {
                currentCount++;
                if (currentCount > topCount) {
                    topCount = currentCount;
                    topStart = currentStart;
                    topEnd = i;
                }
            } else {
                currentCount = 1;
                currentStart = i;
            }
        }

        return [topStart, topEnd];
        /* END SOLUTION */
    };
}.call(this));
