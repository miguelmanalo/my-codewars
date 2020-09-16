// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

const capitals = (word) => {
    const answer = [];
    const wordArray = word.split('');
    const capitalFinder = (s) => {
        if (s === s.toUpperCase()) return true;
    }

    wordArray.forEach((element, index) => {
        if (capitalFinder(element) === true) answer.push(index);
    });

    return answer;
}

//Tests
console.log( capitals('CodEWaRs')); // [0,3,4,6]