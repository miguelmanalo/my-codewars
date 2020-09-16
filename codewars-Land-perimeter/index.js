// Land perimeter - 5 kyu
// codewars.com/kata/5839c48f0cf94640a20001d3/train/javascript

// Task:
// Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:

// ['XOOXO',
//  'XOOXO',
//  'OOOXO',
//  'XXOXO',
//  'OXOOO']

// should return: "Total land perimeter: 24",

// while

// ['XOOO',
//  'XOXO',
//  'XOXO',
//  'OOXX',
//  'OOOO']

// should return: "Total land perimeter: 18"

// FUNDAMENTALS, LOOPS, CONTROL FLOW, BASIC LANGUAGE FEATURES

const landPerimeter = arr => {
    // declare a number to hold all the additions of the Xs I find
    let perimeterSum = 0;
    // iterate through the given array argument
    for (let i = 0; i < arr.length; i++) {
        // iterate through each individual string in the given array
        for (let j = 0; j < arr[i].length; j++) {
            // see if a char is an X
            if (arr[i][j] === 'X') {
                // other Xs will minus the potential perimeter of an X which starts at 4 for a free standing X
                let tempPeriVal = 4;
                // check horizontally to see if there's other Xs and if there are, minus 1 from tempPeriVal
                if (arr[i][j - 1] === 'X') tempPeriVal--;
                if (arr[i][j + 1] === 'X') tempPeriVal--;
                // check vertically to see if there's other Xs and if there are, minus 1 from tempPeriVal
                if (arr[i + 1] !== undefined && arr[i + 1][j] === 'X') tempPeriVal--; 
                if (arr[i - 1] !== undefined && arr[i - 1][j] === 'X') tempPeriVal--;
                // store the calculated value of that X in perimeterSum
                perimeterSum += tempPeriVal;
                // move onto the next item in the string
            }
        }
    }
    // return the sum of all the X-values in the format that was provided
    return `Total land perimeter: ${perimeterSum}`;
}

console.log(landPerimeter(['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO'])); // "Total land perimeter: 24"
console.log(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]));   // "Total land perimeter: 60"
console.log(landPerimeter(["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"]));   // "Total land perimeter: 52"
console.log(landPerimeter(["XXXXXOOO", "OOXOOOOO", "OOOOOOXO", "XXXOOOXO", "OXOXXOOX"]));   // "Total land perimeter: 40"
console.log(landPerimeter(["XOOOXOO", "OXOOOOO", "XOXOXOO", "OXOXXOO", "OOOOOXX", "OOOXOXX", "XXXXOXO"]));   // "Total land perimeter: 54"
console.log(landPerimeter(["OOOOXO", "XOXOOX", "XXOXOX", "XOXOOO", "OOOOOO", "OOOXOO", "OOXXOO"]));   // "Total land perimeter: 40"