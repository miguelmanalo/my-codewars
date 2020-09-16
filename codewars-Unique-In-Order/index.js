// Codewars - Fundamentals: Unique In Order (6 kyu)
// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = (iterable) => {
    const answerArray = [];
    //if I don't want to distinguish between a string and an array
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i + 1] !== iterable[i]) {
            answerArray.push(iterable[i]);
        }
    }
    return answerArray;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));  // ['A','B','C','D','A','B']
console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));  // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]));    // [1,2,3]