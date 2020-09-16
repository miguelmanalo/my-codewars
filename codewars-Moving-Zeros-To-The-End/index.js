// Moving Zeros To The End - 5 kyu
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = arr => {
    const arrCopy = arr.slice();
    const zeroHolder = [];
    const nonZeroHolder = [];

    for (let i = 0; i < arrCopy.length; i++) {
        arrCopy[i] === 0 ? zeroHolder.push(arrCopy[i]) : nonZeroHolder.push(arrCopy[i]);
    }
    return nonZeroHolder.concat(zeroHolder);
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));  // [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // [ false, 1, 1, 2, 1, 3, "a", 0, 0 ]