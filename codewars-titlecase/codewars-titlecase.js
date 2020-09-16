function titleCase(title, minorWords) {
    const capitalizedArray = [];
    let answer;
    let minorSplit;
    let upperMinor = [];
    let lowercaseMinor;
    const wordsSplit = title.split(' ');
    const lowercaseWords = wordsSplit.map(item => item.toLowerCase());
    const capitalize = (s) => {
        // found this snippet from flavio
        return s.charAt(0).toUpperCase() + s.slice(1)
      }

    // make uppercase all the title words
    for (let i = 0; i < lowercaseWords.length; i++) {
        capitalizedArray.push(lowercaseWords[i].charAt(0).toUpperCase() + lowercaseWords[i].slice(1));
    }

    //if no parameter is passed, just return the newly capitalized array
    if (minorWords === undefined) {
        return capitalizedArray.join(" ");
        //if there is a minorWords argument passed then we continue on
    } else {
        minorSplit = minorWords.split(' ');
        //sanitize the minorWords by making them all lowercase
        lowercaseMinor = minorSplit.map(item => item.toLowerCase()); 

        //then capitalize all the minor words
        for (let i = 0; i < lowercaseMinor.length; i++) {
            upperMinor.push(capitalize(lowercaseMinor[i]));
        }

        for (let i = 1; i < capitalizedArray.length; i++) {
            for (let j = 0; j < upperMinor.length; j++) {
                if (capitalizedArray[i] === upperMinor[j]) {
                    // this took forever to figure out. why?? 
                    // Why did it take me so long to just replace it as I found it.
                    capitalizedArray[i] = capitalizedArray[i].toLowerCase();
                }
            }
        }
        answer = capitalizedArray.join(" ");
    }
    return answer;
}

// console.log(titleCase('')); // ''
// console.log(titleCase('a clash of KINGS', 'a an the of')); // 'A Clash of Kings'
// console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); // 'The Wind in the Willows'
// console.log(titleCase('the quick brown fox')); // 'The Quick Brown Fox'
// console.log(titleCase('a bc', 'BC')); // 'A bc'
// console.log(titleCase('a clash of KINGS', "a an the OF")) // 'A Clash of Kings'