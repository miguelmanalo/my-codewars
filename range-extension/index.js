// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:
// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-6,-3-1,3-5,7-11,14,15,17-20"

function solution(list){
  // TODO: complete solution 
  // declare an empty string to hold the answer
  let answerStr = [];
  let rangeStartEnd = [];
  let rangeToBePushed = '';
  // make a recursive function to check every n + item in the array
  const numChecker = (arr) => {
    console.log(arr)
    for (let i = 0, len = list.length; i < len; i += 1) {
      console.log(arr[i]);
      if (arr[i + 1] === arr[i] + 1) {
        console.log('here')
        rangeStartEnd.push(arr[i]);
        numChecker(arr.slice(i + 1));
      } else if (arr[i + 1] !== arr[i] + 1 && rangeStartEnd.length >= 3) {
        rangeToBePushed = `${Math.min(...rangeStartEnd)}-${Math.max(...rangeStartEnd)}`;
        answerStr.push(rangeToBePushed);
        console.log(answerStr);
        rangeToBePushed = '';
        rangeStartEnd = [];
      } else if (arr[i + 1] !== arr[i] + 1 && rangeStartEnd.length < 3) {
        answerStr.push(arr[i]);
        console.log(answerStr);
        console.log(arr[i])
        numChecker(arr.slice(i + 1));
      }
    }
  }
  
  // iterate thru the array arg and ask if n + 1 is exactly +1 of n
  // for (let i = 0, len = list.length; i < len; i += 1) {
    
  // }
  // if it is exactly n + 1, check n + 2 and so on
  // when the n checks are no longer linear, take n and the furthest n-plus and put them in the neat little format
  // and push to the answer string
  // if the n + 1 is not exactly plus one, push n
  // return the answer string
  numChecker(list);
  return answerStr.join('');
};

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])); // returns "-6,-3-1,3-5,7-11,14,15,17-20"