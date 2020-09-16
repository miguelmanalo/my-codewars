// Take a Number And Sum Its Digits Raised To The Consecutive Powers
// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.
// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// If there are no numbers of this kind in the range [a, b] the function should output an empty list.
// sumDigPow(90, 100) == []

function sumDigPow(a, b) {
    let holdingStr = '';
    let onesCheck;
    let tensCheck;
    let hundredsCheck;
    let thousandsCheck;
    let tenThousandsCheck;
    let hundredThousandsCheck;
    let millionCheck;
    let numbersSum;
    const answer = [];

    parameterFor: for (a; b >= a; a++) {
        holdingStr = a.toString();
        //this has to be inside this loop or all the numbers get pushed together in the same array
        const checkArray = [];
        
        //separate out each number and do the exponent
        for (let i = 0; i <= holdingStr.length; i++) {
            if (i === 0 && holdingStr[0] !== undefined) {
                onesCheck = Math.pow(holdingStr[0], 1);
            } else if (i === 1 && holdingStr[1] !== undefined) {
                tensCheck = Math.pow(holdingStr[1], 2);
            } else if (i === 2 && holdingStr[2] !== undefined) {
                hundredsCheck = Math.pow(holdingStr[2], 3);
            } else if (i === 3 && holdingStr[3] !== undefined) {
                thousandsCheck = Math.pow(holdingStr[3], 4);
            } else if (i === 4 && holdingStr[4] !== undefined) {
                tenThousandsCheck = Math.pow(holdingStr[4], 5);
            } else if (i === 5 && holdingStr[5] !== undefined) {
                hundredThousandsCheck = Math.pow(holdingStr[5], 6);
            } else if (i === 6 && holdingStr[6] !== undefined) {
                millionCheck = Math.pow(holdingStr[6], 7);
            }
        }

        //push the exponents into the array to be summed
        checkArray.push(onesCheck);
        if (tensCheck !== undefined) {
            checkArray.push(tensCheck);
        }  
        
        if (hundredsCheck !== undefined) {
            checkArray.push(hundredsCheck);
        }  
        
        if (thousandsCheck !== undefined) {
            checkArray.push(thousandsCheck);
        }

        if (tenThousandsCheck !== undefined) {
            checkArray.push(tenThousandsCheck);
        }

        if (hundredThousandsCheck !== undefined) {
            checkArray.push(hundredThousandsCheck);
        }
        if (millionCheck !== undefined) {
            checkArray.push(millionCheck);
        }

        //use reduce to sum the array for each indiv number
        numbersSum = checkArray.reduce((runningTotal, currVal) => runningTotal + currVal, 0);

        //if the sum matches the original argument, pass it to the answer array
        if (numbersSum === a) {
            answer.push(a);
        }    
    }
    return answer;
}
  
// console.log(sumDigPow(1, 10));  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(sumDigPow(1, 100)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// console.log(sumDigPow(10, 100));  // [89]
// console.log(sumDigPow(90, 100)); // []
// console.log(sumDigPow(90, 150)); // [135]
// console.log(sumDigPow(50, 150)); // [89, 135]
// console.log(sumDigPow(10, 150)); // [89, 135]
// console.log(sumDigPow(2632374, 2647088)); // [2646798]
