// Moves in squared strings (Part I)
// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript

// This kata is the first of a sequence of four about "Squared Strings".
// You are given a string of n lines, each substring being n characters long: For example:
// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

// Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
// vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"

// Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
// hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"

// or printed:
// vertical mirror   |horizontal mirror   
// abcd --> dcba     |abcd --> mnop 
// efgh     hgfe     |efgh     ijkl 
// ijkl     lkji     |ijkl     efgh 
// mnop     ponm     |mnop     abcd 
// Task:

// Write these two functions
// and high-order function oper(fct, s) where

// fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)
// Examples:

// s = "abcd\nefgh\nijkl\nmnop"
// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"

// Note:
// The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Sample Tests".

const vertMirror = str => {
    const holdingReversed = [];
    let newStrArr = str.split('\n').forEach((string) => {
        let reversed = '';
        for (let i = 1; i <= string.length; i++) {
            reversed += string[string.length - i];
        }
        holdingReversed.push(reversed);
    });
    return holdingReversed.join('\n');
}

const horMirror = str => str.split('\n').reverse().join('\n');

const oper = (funct, str) => funct(str);

console.log(oper(vertMirror, "abcd\nefgh\nijkl\nmnop")); // "dcba\nhgfe\nlkji\nponm"
console.log(oper(horMirror, "abcd\nefgh\nijkl\nmnop"));  // "mnop\nijkl\nefgh\nabcd"

console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu")); // "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw"
console.log(oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"));  // "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP"
console.log(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt"));   // "yeCt\nCSbg\nJVhv\nlVHt"
console.log(oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz"));  // "cEYz\nLPKo\ndbrZ\nnjMK"

// Notes
// Array.join()
// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// expected output: "FireAirWater"

// console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
