//  Factorial 
// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here: https://www.wikiwand.com/en/Factorial

const factorial = (num) => {
    if (num < 0 || num > 12) throw new RangeError("Num must be greater than 0 and less than 12.")
    // I think 0! has to be hard coded in, its not a calculated value
    if (num === 0) return 1;

    // Calculate the factorial here
    // ternary syntax
    return (num === 1 ? num : num * factorial(num - 1));
    // // base case    
    // if (num === 1) return num;
    // // recursive case
    // return num * factorial(num - 1);
}

console.log(factorial(0));  // 1
console.log(factorial(1));  // 1
console.log(factorial(2));  // 2
console.log(factorial(3));  // 6
// console.log(factorial(-1));  // 1
console.log(factorial(13));  // RangeError "Num must be greater than 0 and less than 12."