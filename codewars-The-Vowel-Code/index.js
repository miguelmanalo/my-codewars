// The Vowel Code - 6 kyu
// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// FUNDAMENTALS, ARRAYS, STRINGS, FUNCTIONS, CONTROL FLOW, BASIC LANGUAGE FEATURES, REGULAR EXPRESSIONS, DECLARATIVE PROGRAMMING, ADVANCED LANGUAGE FEATURES

const encode = string => {
    let splitStr = string.split('');

    for (let i = 0; i < splitStr.length; i++) {
        switch (splitStr[i]) {
            case 'a':
                splitStr[i] = '1';
                break;
            case 'e':
                splitStr[i] = '2';
                break;
            case 'i':
                splitStr[i] = '3';
                break;
            case 'o':
                splitStr[i] = '4';
                break;
            case 'u':
                splitStr[i] = '5';
                break;
            default:
                break;
        }
    }
    return splitStr.join('');
}
  
const decode = string => {
    let splitStr = string.split('');

    for (let i = 0; i < splitStr.length; i++) {
        switch (splitStr[i]) {
            case '1':
                splitStr[i] = 'a';
                break;
            case '2':
                splitStr[i] = 'e';
                break;
            case '3':
                splitStr[i] = 'i';
                break;
            case '4':
                splitStr[i] = 'o';
                break;
            case '5':
                splitStr[i] = 'u';
                break;
            default:
                break;
        }
    }
    return splitStr.join('');
}

console.log(encode('hello'));   // 'h2ll4'
console.log(encode('How are you today?'));   //  'H4w 1r2 y45 t4d1y?'
console.log(encode('This is an encoding test.'));   //  'Th3s 3s 1n 2nc4d3ng t2st.'
console.log(decode('h2ll4'));   //  'hello'