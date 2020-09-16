// Give me a Diamond - codewars (6 kyu)
// FUNDAMENTALS STRINGS
// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is: " *\n ***\n*****\n ***\n *\n"

const diamond = n => {
    // Return null/nil/None/... if the input is an even number or negative
    if (n % 2 === 0 || n < 0) return null;
    const diamMaker = [];

    diamondRight: for (let s = n; s >= 0; s -= 2) {
        // every line of the diamond has to be on a new line
            diamMaker.push('*'.repeat(s) + '\n');
        }

    diamondLeft: for (let s = n - 2; s >= 0; s -= 2) {
        // i start at the center of the diamond minus the row already completed above and radiate outwards to the left
        // unshift lets me go left while iterating in the same way for d
        diamMaker.unshift('*'.repeat(s) + '\n');
    }
    spaceLoopLeft: for (let i = Math.floor(diamMaker.length / 2); i >= 0; i--) {
        // this was strangely hard
        // start in the middle, don't ever add spaces to the middle
        // iterate i and concat the appropriate amount of spaces
        // I guess i was trying to iterate both the diamonds and the spaces together and couldn't quite make the logic work for my brain
        diamMaker[i] = ' '.repeat(Math.floor(diamMaker.length / 2) - i).concat(diamMaker[i]);
    }
    spaceLoopRight: for (let i = 0; i <= Math.floor(diamMaker.length / 2); i++) {
        diamMaker[Math.floor(diamMaker.length / 2) + i] = ' '.repeat(i).concat(diamMaker[Math.floor(diamMaker.length / 2) + i]);
    }
    return diamMaker.join('');
}

console.log(diamond(1));
console.log(diamond(1) === "*\n"); // "*\n"
console.log(diamond(3)); 
console.log(diamond(3) === " *\n***\n *\n"); // " *\n***\n *\n"
console.log(diamond(5));
console.log(diamond(5) === "  *\n ***\n*****\n ***\n  *\n"); // "  *\n ***\n*****\n ***\n  *\n"
console.log(diamond(2)); // null
console.log(diamond(-3)); // null
console.log(diamond(0)); // null