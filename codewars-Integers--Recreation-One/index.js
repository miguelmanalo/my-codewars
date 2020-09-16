// Integers: Recreation One - 5kyu
// https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript
// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

// #Examples:
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see Example Tests: for more details.

// FUNDAMENTALS, ALGORITHMS, OPTIMIZATION

const listSquared = (m, n) => {
    const answerArr = [];
    const divisorObj = {};

    // sort every number and it's divisors into my divisorObj
    for (let i = m; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            if (!divisorObj[i]) divisorObj[i] = [];
            if (i % j === 0) divisorObj[i].push(j);
        }
    }

    // evaluate the sum of the divisors when it's calculated
    for (const property in divisorObj) {
        let sqSum = divisorObj[property].map(item => item * item).reduce((acc, cv) => acc + cv, 0);
        if (Math.sqrt(sqSum) % 1 === 0) answerArr.push([Number(property), sqSum]);
    }
    return answerArr;
}

console.log(listSquared(1, 250));   // [[1, 1], [42, 2500], [246, 84100]])
// console.log(listSquared(42, 250));   // [[42, 2500], [246, 84100]])
// console.log(listSquared(250, 500));   //  [[287, 84100]])