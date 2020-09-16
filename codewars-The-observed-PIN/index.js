// The observed PIN - 4 kyu
// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

// The keypad has the following layout:

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

// He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits

// Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

// Detective, we are counting on you!

// ALGORITHMS

function getPINs(observed) {
    // TODO: This is your job, detective!
    const numPadArr = [
        [ 1, 2, 3, ],
        [ 4, 5, 6, ],
        [ 7, 8, 9, ],
        [  , 0,  , ] 
            ];
    for (let i = 0; i < numPadArr.length; i++) {

    }
}

// console.log(getPINs('8'));  // ["5", "7", "8", "9", "0"]
console.log(getPINs('11')); // ["11", "22", "44", "12", "21", "14", "41", "24", "42"]
// console.log(getPINs('369'));  // ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]

// My Notes
// build array of the numpad
// four rows
// for the zero row, null, 0, null
// or may be just an array of 0
// const numPadArr = [
//  [ 1, 2, 3, ],
//  [ 4, 5, 6, ],
//  [ 7, 8, 9, ],
//  [  , 0,  , ] 
// ];
// for 6 numPadArr[1][2]
// all it's horizontal mates are at 5 at numPadArr[1, 1]
// vertical mates are at 3 at numPadArr[0][2], numPadArr[2][2]
// 8's vertical mate is at 0 at numPadArr[3][1]

// you have to split the number into single digits
// horizontally you move plus j, minus j in the same row
// vertically you move plus minus i in the same 'column'

// but how do i get all the various combinations?