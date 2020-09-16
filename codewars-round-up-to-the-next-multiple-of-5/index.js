// Given an integer as input, can you round it to the next (meaning, "higher") 5?

// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

const roundToNext5 = (num) =>
{
    for (let i = num; i < num + 5; i++)
    {
        if (i % 5 === 0) 
        {
            return i;
        }
    }
}

// Tests:
console.log(roundToNext5(0));   // 0    ->   0
console.log(roundToNext5(2));   // 2    ->   5
console.log(roundToNext5(3));   // 3    ->   5
console.log(roundToNext5(12));   // 12   ->   15
console.log(roundToNext5(21));   // 21   ->   25
console.log(roundToNext5(30));   // 30   ->   30
console.log(roundToNext5(-2));   // -2   ->   0
console.log(roundToNext5(-5));   // -5   ->   -5