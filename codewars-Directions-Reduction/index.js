// Directions Reduction - 5 kyu
// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountain desert the smart way.

// The directions given to the man are, for example, the following (depending on the language):
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

// You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]

// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].

// FUNDAMENTALS

const dirReduc = arr => {
    // make a copy of the arr argument and mutate that copy
    const copyArr = arr.slice();
    // iterate through the array and see if the next value in the array is a polar opposite
    const pairChecker = arr => {
        let madeChanges = false;
        for (let i = 0, len = arr.length; i < len; i++) {
            if ((arr[i] === "NORTH" && arr[i + 1] === "SOUTH") || (arr[i] === "SOUTH" && arr[i + 1] === "NORTH")) {
                // if the current value and the next value are indeed polar opposites, splice them both out and set the madeChanges flag to true
                arr.splice(i, 2);
                madeChanges = true; 
            }
            else if ((arr[i] === "WEST" && arr[i + 1] === "EAST") || (arr[i] === "EAST" && arr[i + 1] === "WEST")) {
                // if the current value and the next value are indeed polar opposites, splice them both out and set the madeChanges flag to true
                arr.splice(i, 2);
                madeChanges = true; 
            }
        }
        // set a boolean flag inside the function scope called madeChanges to see if the given array iteration needed any splicing, if it didn't need any changes the flag never gets set to true and the recursive call doesn't happen and the final arr value is returned
        return madeChanges === true ? pairChecker(arr) : arr;
    }
    return pairChecker(copyArr);
}

// console.log(dirReduc(["NORTH", "SOUTH"]));    // []
// console.log(dirReduc(["SOUTH", "NORTH"]));    // []
// console.log(dirReduc(["WEST", "EAST"]));    // []
// console.log(dirReduc(["EAST", "WEST"]));    // []

// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));    //["WEST"]
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));    // ["NORTH", "WEST", "SOUTH", "EAST"]
// console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));    // []
// console.log(dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]));    // ["WEST", "WEST"]