// Using closures to share class state - 5 kyu
// https://www.codewars.com/kata/53583765d5493bfdf5001b35/train/javascript
// In object-oriented programming, it is sometimes useful to have private shared state among all instances of a class; in other languages, like ruby, this shared state would be tracked with a class variable. In javascript we achieve this through closures and immediately-invoked function expressions.

// In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object. The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.

// garfield = new Cat('garfield', 25);
// Cat.averageWeight(); // 25

// felix = new Cat('felix', 15);
// Cat.averageWeight();   // now 20
// But that's not all. Cats can change weight. Use Object.defineProperty to write custom setters and getters for the weight property so that the following works properly even as instances change their weight value:

// felix.weight = 25;
// felix.weight // 25
// Cat.averageWeight(); // now 25
// Object.defineProperty must be used to pass all tests. Storing a reference to all instances and recalculating the average weight each time is easier, but would prevent garbage collection from working properly if used in a production environment.

// Finally, since average weight is an aggregate statistic it's important that we validate constructor arguments so that no cats are created without a specified weight; so, make sure to throw an error if both arguments are not recieved by the constructor.

// Summary of requirements:
// Cat constructor, requiring arguments for name and weight
// Throw an error if name or weight not specified when invoking the constructor.
// Cat.averageWeight() method should give the average weight of all cat instances created with Cat, even after if the instance's properties have changed.
// Must use Object.defineProperty

// FUNDAMENTALS, CLOSURES, BASIC LANGUAGE FEATURES, DESIGN PATTERNS, DESIGN PRINCIPLES, INHERITANCE, OBJECT-ORIENTED PROGRAMMING, POLYMORPHISM

// Let's make a Cat constructor!
var Cat = (function () {
    // ... your code here.
   }());

fluffy = new Cat('fluffy', 15);
garfield = new Cat('garfield', 25);


Test.assertEquals(fluffy.weight, 15);
Test.assertEquals(fluffy instanceof Cat, true);
Test.assertEquals(fluffy.averageWeight, undefined);
Test.assertEquals(typeof Cat.averageWeight, "function");
Test.assertEquals(Cat.averageWeight(), 20);
   