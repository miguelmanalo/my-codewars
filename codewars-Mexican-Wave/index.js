// Mexican Wave
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

// Introduction
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.
// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia: https://en.wikipedia.org/wiki/Wave_(audience))

// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

// Rules
// 1. The input string will always be lower case but maybe empty.
// 2. If the character in the string is whitespace then pass over it as if it was an empty seat.

// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

const wave = str => {
    // Code here
    const answerArray = [];
    let splitStr = str.split('');

    // the for-loop method
    for (let i = 0; i < splitStr.length ; i++) {
        // skip the whitespace
        if (splitStr[i] !== ' ') {
        
            // make each letter uppercase
            splitStr[i] = splitStr[i].toUpperCase();

            // make all other items lowercase
            // iterate left from where I am at i
            for (let k = i - 1; k >= 0; k--) {
                splitStr[k] = splitStr[k].toLowerCase();
            }
            answerArray.push(splitStr.join(''));
        }
    }
    return answerArray;
}

// console.log(wave("mig uel")); // Should return: ["Mig uel", "mIg uel", "miG uel", "mig Uel", "mig uEl", "mig ueL"]
// console.log(wave("")); // Should return: []
console.log(wave(" gap ")); // Should return: [" Gap ", " gAp ", " gaP "]
// console.log(wave("hello")); // Should return: ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// console.log(wave("codewars")); // Should return: ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
console.log(wave("two words")); // Should return: ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]