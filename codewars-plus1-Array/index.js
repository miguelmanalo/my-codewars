// Codewars: +1 Array
// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed

// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].
// [4, 3, 2, 5] would return [4, 3, 2, 6]

const upArray = arr => {
    // if any number in the array is less than 0, greater than 9, or an empty array then return null
    if (arr.some(element => element < 0) || arr.some(element => element > 9) || arr.length === 0) return null;

    // **REFACTOR: redo the above to not use array methods, shouldn't be too hard


    for (let i = arr.length - 1; i >= 0; i--) {
        // loop from the end going backwards
        // if the number ends in anything other than 9, we just increment that last value by mutating it in place and then return so the loop doesn't increment every other non-9 number
        if (arr[i] < 9 || i === 0) {
            arr[i]++;
            // if you need to make a new numbers place if your initial array is all 9s
            if (arr[0] === 10) {
                arr[0] = 0;
                arr.unshift(1);
            }
            return arr;
        }
        
        // if a value does equal 9, make it zero and go to the above if-statement and increment that;
        if (arr[i] >= 9 && i !== 0) {
            arr[i] = 0;
        }
    }
}

// console.log(upArray([])); // null
// console.log(upArray([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,])); 
// console.log(upArray([9,9,9,9])); // [1,0,0,0,0]
// console.log(upArray([8,9,9,9])); // [9,0,0,0]
// console.log(upArray([2,3,9])); // [2,4,0]
// console.log(upArray([4,3,2,5])); // [4,3,2,6])
// console.log(upArray([1,-9])); // null
// console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7])); // [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8]
// console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7, 5, 3, 2, 6, 7, 8, 4, 2, 4, 2, 6, 7, 8, 7, 4, 5, 2, 1])); // [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7, 5, 3, 2, 6, 7, 8, 4, 2, 4, 2, 6, 7, 8, 7, 4, 5, 2, 2]