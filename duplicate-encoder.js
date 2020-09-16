function duplicateEncode(word){
    //case doesn't matter so make everything lowercase
    const wordLowerCase = word.toLowerCase();
    const lettersArray = wordLowerCase.split('');
    const translatedArray = [];

    function checkForDuplicates(array) {
        const uniqueValues = [];
        const translatorObj = {};

        // Translate each char to ( or ) //
        array.forEach(function (item, index, currArray) {
            //set every letter in the object to '(' to start
            translatorObj[currArray[index]] = '(';
            console.log(uniqueValues.indexOf(item))
            //change only the duplicates to ')'
            if (uniqueValues.indexOf(item) !== -1) {
                
                translatorObj[currArray[index]] = ')';     
            }   
            uniqueValues.push(item);
        });

        // Write the desired outcome //
        //iterate through the letters and then iterate for the key-value pair 
        //in translatorObj for the given letter      
        array.forEach(function (item, index, currArray) {
            for (const key in translatorObj) { 
                if (item == key) {
                    translatedArray.push(translatorObj[key]);
                }
            }
        })
    };
    
    checkForDuplicates(lettersArray);
    let printableAnswer = translatedArray.toString();
    return printableAnswer.replace(/,/gi, '');
}

console.log(duplicateEncode('aabcdd'))