// 5 kyu - Pete, the baker
// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:
// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

// ALGORITHMS

function cakes(recipe, availIng) {
    // check to see if i have all the ingredients on hand
    // loop through recipe properties and check them against ingredients properties
    const ingArr = Object.keys(availIng);
    const reciArr = Object.keys(recipe);
    const potentialCakes = [];

    for (let i = 0; i < reciArr.length; i++) {
        // if the recipe calls for something I don't have, return 0
        if (!ingArr.includes(reciArr[i])) return 0;
    }

    for (const propertyIng in availIng) {
        for (const propertyRecipe in recipe) {
            // if the ingredients match while i iterate and neither are 0, do the division and push the result
            if (propertyIng === propertyRecipe && (availIng[propertyIng] > 0 && recipe[propertyRecipe] > 0)) {
                potentialCakes.push(availIng[propertyIng] / recipe[propertyRecipe])
            }
            // if either ingredient is zero, just return 0
            else if (recipe[propertyRecipe] <= 0) {
                return 0;
            }
        }
    }
    // have to use the spread argument to pass the multiple values of an array as individual numbers to the Math function
    return Math.floor(Math.min(...potentialCakes));
}

const recipe4 = {"flour":11,"cream":82,"butter":98}; 
const available4 = {"oil":4200,"nuts":8100,"cocoa":300,"chocolate":9100,"milk":300,"apples":0,"sugar":3700,"cream":4900,"flour":7600,"eggs":8900,"butter":8200,"crumbles":0,"pears":2700};
console.log(cakes(recipe4, available4));    // Expected: 59, instead got: 0

const recipe3 =  {"eggs":0,"pears":94,"crumbles":37}; 
const available3 = {"crumbles":800,"flour":5700,"apples":7200,"cream":300,"chocolate":9500,"butter":5400,"oil":4600,"eggs":2000,"cocoa":8200,"nuts":9000,"milk":8500,"sugar":2000,"pears":9600};
console.log(cakes(recipe3, available3));    // Expected: 0, instead got: 21

const recipe1 = {flour: 500, sugar: 200, eggs: 1};
const available1 = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
// console.log(cakes(recipe1, available1));  // 2
      
const recipe2 = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
const available2 = {sugar: 500, flour: 2000, milk: 2000};
// console.log(cakes(recipe2, available2));  // 0

// My Notes
// look at avail first, then compare recipe against it
// or just look for the same key label in both at the same time
// the first instance something comes back as not enough or not even there i can return 0