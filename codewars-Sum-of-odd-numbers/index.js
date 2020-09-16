// Sum of odd numbers
// Given the triangle of consecutive odd numbers:
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:
// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

// function rowSumOddNumbers(num, memo) {
//     // TODO
    
// }

//triangleObj[2]: [3, 5,]

// console.log(rowSumOddNumbers(1)); // 1
// console.log(rowSumOddNumbers(2)); // 3 + 5 = 8
// console.log(rowSumOddNumbers(42));  // 74088


// const howManyOddNums = (num) => {
//     let oddNums = 0;
//     for (let i = 1; i <= num; i++) {
//         oddNums += i;
//     }
//     return oddNums;
// }

// const oddArrayMaker = (num) => {
//     const oddArray = [];
//     for (let i = 0; i < num; i++) {
//         if (i % 2 === 1) oddArray.push(i);
//     }
//     console.log(oddArray);
//     return oddArray;
// }

function rowSumOddNumbers(num) {
    // TODO
    let oddNums = 0;
    for (let i = 0; i <= num; i++) {
        oddNums += i;
    }
    //oddNums is the array length I want and I want to fill that array with odd numbers only

    const oddArray = [];
    // i-odd stops getting pushed when oddArray is full of the required number of odd
    for (let i = 0; oddArray.length < oddNums; i++) {
        if (i % 2 === 1) oddArray.push(i);
    }

    // to be minused from oddArray to make into newArray
    // I only want the values from the num-row, not all the nums before it
    let minus = 0;
    for (let i = 0; i <= num - 1; i++) {
        minus += i;
    }

    return oddArray.slice(minus).reduce((runningTotal, currVal) => runningTotal += currVal, 0);
}

console.log(rowSumOddNumbers(1)); // 1
console.log(rowSumOddNumbers(2)); // 3 + 5 = 8
console.log(rowSumOddNumbers(3)); // 7 + 9 + 11 = 27
console.log(rowSumOddNumbers(4)); // 13 + 15 + 17 + 19 = 64
console.log(rowSumOddNumbers(5)); // 125
console.log(rowSumOddNumbers(42));  // 74088

//// keep only the NUM items of the end of the array for summing

// console.log(oddArrayMaker(howManyOddNums(2))); // 
// console.log(oddArrayMaker(howManyOddNums(3))); // 
// console.log(oddArrayMaker(howManyOddNums(4))); // 
// console.log(oddArrayMaker(howManyOddNums(5))); // 

// console.log(howManyOddNums(2)); // 3
// console.log(howManyOddNums(3)); // 6
// console.log(howManyOddNums(4)); // 10
// console.log(howManyOddNums(5)); // 15

// Given the triangle of consecutive odd numbers:
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

const sumNum = (num) => {
    let answer = 0;
    for (let i = 0; i < num; i++) {
        answer += i;
    }
    return answer;
}

console.log(sumNum(4));