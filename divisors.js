function divisors(integer) {
    const answerArray = [];
    for (let i = 2; i <= integer; i += 1) {
        if (integer % i === 0) {
            if (integer === i) {
                if (answerArray.length === 0) {
                    return `${integer} is prime`;
                }
                return answerArray;
            }
            answerArray.push(i);
        }
    }
    return answerArray;
};

console.log(divisors(12)); // should return [2,3,4,6]
console.log(divisors(25)); // should return [5]
console.log(divisors(13)); // should return "13 is prime"