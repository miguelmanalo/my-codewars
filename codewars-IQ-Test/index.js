// IQ Test - codewars
// https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// ##Examples :
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

const iqTest = numStr => {
    // make even and odd arrays
    const even = [];
    const odd = [];

    // argument is given as string, so i turn it into numbers in an array
    // could use a for-loop, went with forEach
    numStr.split(' ').forEach((item, index) => { 
        // if item is even, log the index where it is
        // if item is odd, log the index where it is
        item % 2 === 0 ? even.push(index) : odd.push(index);
    });

    // whichever array length is bigger means that the lower count is the outlier, return the index of the outlier plus 1 because Bob needs it in that format
    return even.length > odd.length ? odd[0] + 1 : even[0] + 1;
}

console.log(iqTest("2 4 7 8 10"));  // 3, "Third number is odd, while the rest of the numbers are even"
console.log(iqTest("1 2 2"));  // 1, "First number is odd, while the rest of the numbers are even"