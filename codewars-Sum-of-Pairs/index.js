// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]

// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

const sum_pairs = (arr, target) => {
    // this will check to see if a sum found later is at an earlier index than the pair already found
    let indexCheck = [, ]; 
    // answerValues is initiated as undefined because if no match is found, undefined is returned
    let answerValues;
    startAtBeginningLoop: for (let i = 0, len = arr.length; i < len; i++) {
        // j is set to i + 1 so that i and j are never the same value
        oneStepAheadLoop: for (let j = i + 1; j < len + 1; j++) {
            // if a target match is found
            if (arr[i] + arr[j] === target) {
                // if a target match is found and either index value is at a lower index than the match already saved, set answerValues to the new pair and set indexCheck also to the new pair of indices
                if (i < indexCheck[0] || j < indexCheck[1]) {
                    indexCheck[0] = i;
                    indexCheck[1] = j;
                    answerValues[0] = arr[i];
                    answerValues[1] = arr[j];
                    // this is what happens the first time a target match is found, indexCheck has both its values left undefined to start
                } else if (indexCheck[0] === undefined) {
                    answerValues = [,];
                    answerValues[0] = arr[i];
                    answerValues[1] = arr[j];
                    indexCheck[0] = i;
                    indexCheck[1] = j;
                }
            }
        }
    }
    return answerValues;
}

// Tests
const l1 = [1, 4, 8, 7, 3, 15];
const l2 = [1, -2, 3, 0, -6, 1];
const l3 = [20, -13, 40];
const l4 = [1, 2, 3, 4, 1, 0];
const l5 = [10, 5, 2, 3, 7, 5];
const l6 = [4, -2, 3, 3, 4];
const l7 = [0, 2, 0];
const l8 = [5, 9, 13, -3];

console.log(sum_pairs(l1, 8)); // [1, 7]
console.log(sum_pairs(l2, -6)); // [0, -6] 
console.log(sum_pairs(l3, -7)); //  undefined 
console.log(sum_pairs(l4, 2)); // [1, 1]
console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
console.log(sum_pairs([4, -2, 3, 3, 4], 8)); // [4, 4]
console.log(sum_pairs(l7, 0));  // [0, 0]
console.log(sum_pairs(l8, 10)); // [13, -3]

// console.log(sum_pairs(l1, 8));  // [1, 7]   Basic: ["+l1+"] should return [1, 7] for sum = 8");
// console.log(sum_pairs(l2, -6)); // [0, -6]  Negatives: ["+l2+"] should return [0, -6] for sum = -6");
// console.log(sum_pairs(l3, -7)); //  undefined   No Match: ["+l3+"] should return undefined for sum = -7");
// console.log(sum_pairs(l4, 2));  // [1, 1]   First Match From Left: ["+l4+"] should return [1, 1] for sum = 2 ");
// console.log(sum_pairs(l5, 10)); // [3, 7]   First Match From Left REDUX!: ["+l5+"] should return [3, 7] for sum = 10 ");
// console.log(sum_pairs(l6, 8));  // [4, 4]   Duplicates: ["+l6+"] should return [4, 4] for sum = 8");
// console.log(sum_pairs(l7, 0));  // [0, 0]   Zeroes: ["+l7+"] should return [0, 0] for sum = 0");
// console.log(sum_pairs(l8, 10)); // [13, -3]  Subtraction: ["+l8+"] should return [13, -3] for sum = 10");