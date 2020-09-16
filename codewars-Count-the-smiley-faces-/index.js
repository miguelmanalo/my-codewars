// Count the smiley faces! - 6 kyu - codewars
// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

//return the total number of smiling faces in the array
// const countSmileys = arr => {
//     // In case of an empty array return 0.
//     if (arr.length === 0) return 0;

//     let numFaces = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let faceSplit = arr[i].split('');
        
//         // go mouth-first through the face
//         for (let k = faceSplit.length - 1; k > 0; k--) {
//             if (faceSplit.length === 3) {
//                 if ((faceSplit[k] === ')' || faceSplit[k] === 'D') && (faceSplit[k - 1] === '-' || faceSplit[k - 1] === '~') && (faceSplit[k - 2] === ':' || faceSplit[k - 2] === ';')) numFaces++;
//             } else {
//                 // was getting false positives here, didn't have parens around the OR.
//                 if ((faceSplit[k] === ')' || faceSplit[k] === 'D') && (faceSplit[k - 1] === ':' || faceSplit[k - 1] === ';')) {
//                     numFaces++;
//                 }
//             }
//         }
//     }
//     return numFaces;
// }

// Refactored to use Regex
const countSmileys = arr => {
    if (arr.length === 0) return 0;
    let numFaces = 0;

    arr.forEach((item) => {
        if (/^[:|;][-|~]?[)|D]$/.test(item)) numFaces++;
    });  

    return numFaces;
}

// console.log(countSmileys([]));  // 0
console.log(countSmileys([':D',':~)',';~D',':)']));  // 4
console.log(countSmileys([':)',':(',':D',':O',':;']));  // 2
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));  // 1

// My Notes
// strings, : ;
// nose optional - ~
// mouth required ) D
// no other chars allowed
// empty array return 0
// no invalid inputs will be given
// faces will always be going to the right
// faces are strings so I can check them with bracket notation
// maybe i can blow them up with split and use array methods