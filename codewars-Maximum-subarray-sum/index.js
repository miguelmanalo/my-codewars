// 5 kyu - Maximum subarray sum
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// FUNDAMENTALS, ALGORITHMS, LISTS, DATA STRUCTURES, DYNAMIC PROGRAMMING

const maxSequence = arr => {
    // declare a variable to store the greatest sum I've found so far
    let greatestSum = 0;
    // an empty list has a return value of 0
    if (arr.length === 0) return 0;
    // if the given arr is only positive numbers the return value is the sum of the whole arr
    else if (arr.every(item => item > 0)) return arr.reduce((acc, cv) =>  acc + cv, 0);
    // if the given arr is only negative numbers the return value is 0
    else if (arr.every(item => item < 0)) return 0;
    // for mixed positive and negative integer arrays I iterate through the array making sums. So, sum of 0 and 1 store that somewhere then sum of 0, 1, and 2 and compare that to what's stored in greatestSum then sum of 0, 1, 2, and 3 and so forth
    // make a nested for loop with the inner loop marking the new beginning spot of the start of the slice, so the slice isn't stuck at the beginning of the array. It can check for all the different combinations of sums within the array 
    startAtBeginningLoop: for (let i = 0; i < arr.length; i++) {
        // since I'm using slice, j needs to mark the end-point of the slice so j has to be one more than the final array index value
        // 
        oneStepAheadLoop: for (let j = i + 1; j < arr.length + 1; j++) {
            let tempSum = arr.slice(i, j).reduce((acc, cv) => acc + cv, 0);
            // if the sum it's found right now is greater than the sum greaterSum had previously, greatestSum is now that sum
            if (tempSum > greatestSum) greatestSum = tempSum;
        }
    }
    // return that stored value after the whole array is iterated because that means I have found the greatest sum among the combinations
    return greatestSum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));  // 6
console.log(maxSequence([]));  // 0, empty array
console.log(maxSequence([1, 2, 3,]));  // 6, all positive
console.log(maxSequence([-1, -2, -3,]));  // 0, all negatives