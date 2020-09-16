// Multiplication Tables - 6 kyu
// https://www.codewars.com/kata/5432fd1c913a65b28f000342/train/javascript

// Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. 
// **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

// Example:
// multiplication_table(3,3)

// 1 2 3
// 2 4 6
// 3 6 9

// -->[[1,2,3],[2,4,6],[3,6,9]]

// Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.

// FUNDAMENTALS, MATHEMATICS, ALGORITHMS, NUMBERS

const multiplicationTable = (row, col) => {
    const mainArr = [];
    
    // make the array structure based on how many rows are given
    for (let i = 1; i <= row; i++) {
        mainArr.push(new Array());
    }

    // fill the first row with 1 to however many columns are needed
    for (let j = 1; j <= col; j++) {
        mainArr[0].push(j);
    }

    // fill the rest of the rows with calculated values
    // my outer loop here has to use row as the check, not col because I'm calucalting down each row with k and m is iterating horizontally
    for (let k = 1; k < row; k++) {
        for (let m = 0; m < mainArr[0].length; m++) {
            mainArr[k].push(mainArr[0][m] * (k + 1));
        } 
    }
    return mainArr;
}

console.log(multiplicationTable(4,3)); 
console.log(multiplicationTable(2,2));  // [[1,2],[2,4]])
console.log(multiplicationTable(3,3));  // [[1,2,3],[2,4,6],[3,6,9]])
console.log(multiplicationTable(2,5));   // [[1,2,3,4],[2,4,6,8],[3,6,9,12]])
console.log(multiplicationTable(4,4));  // [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]])
console.log(multiplicationTable(2,5));  // [[1,2,3,4,5],[2,4,6,8,10]])