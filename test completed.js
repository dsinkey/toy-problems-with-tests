/*jshint eqnull:true, expr:true*/

var _ = {};

(function() {
    /*
     * Given a sorted array, find the index of an element
     * using a binary search algorithm.
     *
     * Example usage:
     *
     * var index = binarySearch([1, 2, 3, 4, 5], 4);
     * console.log(index); // [3]
     */

    _.binarySearch = function(array, target) {

      // var sub = function(low, high){
      //   if(high === low){
      //     return null;
      //   }
      //
      //   var mid = Math.floor((high - low/2) + low);
      //
      //   if(array[mid]  === target){
      //     return mid;
      //   }
      //
      //   if(array[mid] > target){
      //     sub(low, array[min]);
      //   } else {
      //     sub(array[min], high);
      //   }
      // };
      //
      // return sub(0, target.length);
    };

    /**
    Selection sort loops over indices in the array; for each index, selection sort calls indexOfMinimum and swap.
    If the length of the array is n nn, there are n nn indices in the array.
    Since each execution of the body of the loop runs two lines of code, you might think that 2 n 2n2, n lines of code are executed by selection sort.
    But it's not true! Remember that indexOfMinimum and swap are functions: when either is called, some lines of code are executed.
    How many lines of code are executed by a single call to swap?
    In the usual implementation, it's three lines, so that each call to swap takes constant time.
    How many lines of code are executed by a single call to indexOfMinimum?
    We have to account for the loop inside indexOfMinimum. How many times does this loop execute in a given call to indexOfMinimum? It depends on the size of the subarray that it's iterating over. If the subarray is the whole array (as it is on the first step), the loop body runs n nn times. If the subarray is of size 6, then the loop body runs 6 times.
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
    What if the number of integers in the sequence is odd, so that you cannot pair them all up? It doesn't matter! Just count the unpaired number in the middle of the sequence as half a pair. For example, let's sum up 1 + 2 + 3 + 4 + 5. We have two full pairs (1 + 5 and 2 + 4, each summing to 6) and one "half pair" (3, which is half of 6), giving a total of 2.5 pairs. We multiply 2.5 \cdot 6 = 15 2.5⋅6=152, point, 5, dot, 6, equals, 15, and we get the right answer.
    What if the sequence to sum up goes from 1 to n nn? We call this an arithmetic series. The sum of the smallest and largest numbers is n + 1 n+1n, plus, 1.
    Because there are n nn numbers altogether, there are n/2 n/2n, slash, 2 pairs (whether n nn is odd or even).
    Therefore, the sum of numbers from 1 to n nn is (n + 1)(n / 2) (n+1)(n/2)left parenthesis, n, plus, 1, right parenthesis, left parenthesis, n, slash, 2, right parenthesis, which equals n^2/2 + n/2 n2
    ​​ /2+n/2n, start superscript, 2, end superscript, slash, 2, plus, n, slash, 2. Try out this formula for n = 5 n=5n, equals, 5 and n = 8 n=8n, equals, 8.
    Asymptotic running-time analysis for selection sort

    The total running time for selection sort has three parts:
    The running time for all the calls to indexOfMinimum.
    The running time for all the calls to swap.
    The running time for the rest of the loop in the selectionSort function.
    Parts 2 and 3 are easy. We know that there are n nn calls to swap, and each call takes constant time. Using our asymptotic notation, the time for all calls to swap is \Theta(n) Θ(n). The rest of the loop in selectionSort is really just testing and incrementing the loop variable and calling indexOfMinimum and swap, and so that takes constant time for each of the n nn iterations, for another \Theta(n) Θ(n) time.
    For part 1, the running time for all the calls to indexOfMinimum, we've already done the hard part. Each individual iteration of the loop in indexOfMinimum takes constant time.
    **/


    _.selectionSort = function(array) {
        var arrayCopy = array.slice();
        var minIndex = 0;

        for (var i = minIndex; i < arrayCopy.length; i++) {
            minIndex = indexOfMinimum(arrayCopy, i);
            selectionSortSwap(arrayCopy, minIndex, i);
        }
        return arrayCopy;
    };

    function selectionSortSwap(array, firstIndex, secondIndex) {
        var temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    };

    function indexOfMinimum(array, startIndex) {

        var minValue = array[startIndex];
        var minIndex = startIndex;

        for (var i = minIndex + 1; i < array.length; i++) {
            if (array[i] < minValue) {
                minIndex = i;
                minValue = array[i];
            }
        }
        return minIndex;
    };




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

    _.insertionSort = function(array) {
        var arrayCopy = array.slice();
        for (var i = 0; i < arrayCopy.length; i++) {
            insert(arrayCopy, i, arrayCopy[i]);
        }
        return arrayCopy;
    };

    function insert(array, rightIndex, value) {
        for (var j = rightIndex; j > 0 && array[j - 1] > value; j--) {
            array[j] = array[j - 1];
        }
        array[j] = value;
    };


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
     *   [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2
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
     */ //

    var merge = function(left, right) {
        var merged = [];
        var iL = 0,
            iR = 0;
        while (merged.length < left.length + right.length) {
            // Default to the left element for stability
            if (iR >= right.length || left[iL] <= right[iR]) {
                merged.push(left[iL]);
                iL += 1;
            } else {
                merged.push(right[iR]);
                iR += 1;
            }
        }
        return merged;
    }

    _.mergeSort = function(array) {
        var lists = [];
        // Split array into sublists
        // Natural variant: split array into pre-sorted sublists
        var currentList = [];
        lists = []
        for (var i = 0; i < array.length; i++) {
            if (currentList.length && array[i] < currentList[currentList.length - 1]) {
                lists.push(currentList);
                currentList = [];
            }
            currentList.push(array[i]);
        }
        lists.push(currentList);
        // Until the entire array is sorted
        while (lists.length > 1) {
            var newLists = [];
            // Merge all adjacent lists
            for (var i = 0; i < Math.floor(lists.length / 2); i++) {
                newLists.push(merge(lists[i * 2], lists[i * 2 + 1]))
            }
            // Include the leftover list if the number is odd
            if (lists.length % 2) {
                newLists.push(lists[lists.length - 1]);
            }
            lists = newLists;
        }
        // we have a single, fully sorted list
        return lists[0];
        /* END SOLUTION */
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

    // Introduce i into the global scope so we can test function efficiency
    var i;

    // Feel free to add helper functions if needed.
    /* START SOLUTION */

    function bubbleSortSwap(index1, index2, array) {
        var temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        return array;
    };
    /* END SOLUTION */

    _.bubbleSort = function(array) {
        // Your code here.
        /* START SOLUTION */
        if (!Array.isArray(array)) {
            throw new TypeError("bubbleSort accepts only arrays");
        }

        var len = array.length;

        for (var i = 0; i < len; i++) {
            var swaps = 0;

            // Do j < len - 1 - i iterations so we don't consider the final (sorted)
            // element in the array in future iterations
            for (var j = 0; j < len - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    swaps++;
                    bubbleSortSwap(j, j + 1, array);
                }
            }
        }

        return array;
        /* END SOLUTION */
    };

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

    _.nthFibonacci = function(n) {
        var fibs = [0, 1];
        for (; n > 1; n--) {
            fibs.push(fibs.shift() + fibs[0]);
        }
        return fibs[n];
        /* END SOLUTION */
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

    _.rockPaperScissors = function(rounds) {

        rounds = rounds || 3;
        var outcomes = [];

        var plays = ['rock', 'paper', 'scissors'];

        var combos = function(roundsToGo, playedSoFar) {
            if (roundsToGo === 0) {
                outcomes.push(playedSoFar);
                return;
            }

            for (var i = 0; i < plays.length; i++) {
                var currentPlay = plays[i];
                combos(roundsToGo - 1, playedSoFar.concat(currentPlay));
            }
        };
        combos(rounds, []);

        return outcomes;
        /* END SOLUTION */
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
        9: 'WXYZ'
    };


    _.telephoneWords = function(digitString) {
        var words = [];

        var lettersForDigits = function(word, digits) {
            if (digits.length === 0) {
                words.push(word);
                return;
            }
            // Solution note: during solution review, refactor currentDigit and remainDigits
            // They are shown here for clarity of the solution progression
            var currentDigit = digits[0];
            var remainDigits = digits.slice(1);
            var letters = phoneDigitsToLetters[currentDigit].split('');
            for (var i = 0; i < letters.length; i++) {
                lettersForDigits(word + letters[i], remainDigits);
            };
        };
        lettersForDigits('', digitString.split(''));

        return words;
        /* END SOLUTION */
    };




}).call(this);
