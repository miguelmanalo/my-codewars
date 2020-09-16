// Tic-Tac-Toe Checker - 5 kyu
// https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript

// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

// ALGORITHMS, ARRAYS

const isSolved = board => {
    for (let i = 0; i < board.length; i++) {
        // horizontal matches
        // [0,0], [1,0], [2,0] match col 1
        // [0,1], [1,1], [2,1] match col 2
        // [0,2], [1,2], [2,2] match col 3
        if ((board[i][0] === board[i][1]) && (board[i][0] === board[i][2])) {
            switch (board[i][0]) {
                case 1:
                    return 1;
                case 2:
                    return 2;
            }
        }
        
        // vertical matches
        // [0,0], [0,1], [0,2] match row 1
        // [1,0], [1,1], [1,2] match row 2
        // [2,0], [2,1], [2,2] match row 3
        if ((board[0][i] === board[1][i]) && (board[0][i] === board[2][i])) {
            switch (board[0][i]) {
                case 1:
                    return 1;
                case 2:
                    return 2;
            }
        }
    }

    // diagonal matches
    // [0,0], [1,1], [2,2]
    // [0,2], [1,1], [2,0]
    if ((board[0][0] === board[1][1]) && (board[0][0] === board[2][2]) || (board[0][2] === board[1][1]) && board[1][1] === board[2][0]) {
        switch (board[1][1]) {
            case 1:
                return 1;
            case 2:
                return 2;
        }
    }

    // if no matches are found, and there's still 0s return -1
    // if no matches are found but the board is full return tie 0
    return (board[0].includes(0) || board[1].includes(0) || board[2].includes(0)) ? -1 : 0;
}

// console.log(isSolved([[0, 0, 1], [0, 1, 2], [2, 1, 0]]));    // -1
// console.log(isSolved([[2, 2, 2], [0, 0, 0], [0, 0, 0]]));    // 2
// console.log(isSolved([[1, 1, 0], [2, 1, 0], [2, 1, 0]]));    // 1
// console.log(isSolved([[2, 1, 0], [0, 2, 0], [2, 1, 2]]));    // 2
console.log(isSolved([[1, 2, 1], [2, 2, 1], [2, 1, 2]]));    // 0

// console.log(isSolved(
//     [
//         [1,2,1],
//         [2,2,1],
//         [2,1,2]
//     ]));    // -1

// console.log(isSolved(
//     [
//         [0,0,1],
//         [0,1,2],
//         [2,1,0]
//     ]));    // -1