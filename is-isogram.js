function isIsogram(str){
    const wordLowerCase = str.toLowerCase();
    const lettersArray = wordLowerCase.split('');
    const uniqueValues = [];
    let check = true;

    if (str == '') {
        return true;
    }

    for (let i = 0; i < lettersArray.length; i += 1) {
        console.log(uniqueValues.indexOf(lettersArray[i]));
        if (uniqueValues.indexOf(lettersArray[i]) >= 0) {
            check = false;
        } 
        uniqueValues.push(lettersArray[i]);
    }
    return check;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('isogram'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
console.log(isIsogram('isIsogram'));
console.log(isIsogram(''));