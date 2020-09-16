// Simple Events - 5 kyu
// codewars.com/kata/52d3b68215be7c2d5300022f/train/javascript
// Your goal is to write an Event constructor function, which can be used to make event objects.

// An event object should work like this:

// it has a .subscribe() method, which takes a function and stores it as its handler
// it has an .unsubscribe() method, which takes a function and removes it from its handlers
// it has an .emit() method, which takes an arbitrary number of arguments and calls all the stored functions with these arguments
// As this is an elementary example of events, there are some simplifications:

// all functions are called with correct arguments (e.g. only functions will be passed to unsubscribe)
// you should not worry about the order of handlers' execution
// the handlers will not attempt to modify an event object (e.g. add or remove handlers)
// the context of handlers' execution is not important
// each handler will be subscribed at most once at any given moment of time. It can still be unsubscribed and then subscribed again
// Also see an example test fixture for suggested usage

// FUNDAMENTALS, DESIGN PATTERNS, DESIGN PRINCIPLES, EVENT HANDLING, PUBSUB

function Event() {
    //your implementation goes here  
    this.handler = [];
}

// subscribe method takes a function and stores it as its handler
Event.prototype.subscribe = function(inputFunc) {
    this.handler.push(inputFunc);
    // console.log(`subscribed`);
};

// unsubscribe method takes a f and removes it from its handlers
Event.prototype.unsubscribe = function(inputFunc) {
    let beforeRemoval;
    let afterRemoval;

    for (let i = 0; i < this.handler.length; i++) {
        console.log(this.handler)
        if (this.handler[i] === inputFunc) {
            beforeRemoval = this.handler.slice(0, i);
            afterRemoval = this.handler.slice(i + 1, this.handler.length - 1);
            this.handler = beforeRemoval.concat(afterRemoval);    
        }
    }
    // console.log('unsubbed')
};

// emit method takes an arbitrary num of args and calls all the stored funcs with those args
Event.prototype.emit = function (...args) {
    for (let i = 0; i < this.handler.length; i++) {
    this.handler[0](...args)
    }
}



var event = new Event();
    
function f() {
    f.calls = (f.calls || 0) + 1;
    f.args = Array.prototype.slice.call(arguments);
}

event.subscribe(f);
console.log(event.emit(1, 'foo', true));
// event.emit(1, 'foo', true);

console.log(f.calls === 1); // calls a handler
console.log(f.args);
// Test.assertSimilar(f.args, [1, 'foo', true]); // passes arguments

event.unsubscribe(f);
// event.emit(2);
console.log(event.emit(2));

console.log(f.calls === 1); //no second call