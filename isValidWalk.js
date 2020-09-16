function isValidWalk(walk) {
    //the starting coordinates and the position I want to return to
    const currentWalk = [0, 0,];
    let isAWalk = false;
    //the walk has to be exactly ten minutes
    //not longer, not shorter
    if (walk.length === 10) {
        for (let i = 0; i < 10; i += 1) {
            //n & s = y-coordinates, w & e = x-coordinates
            if (walk[i] === 'n') {
                currentWalk[1]++;
            } else if (walk[i] === 's') {
                currentWalk[1]--;
            } else if (walk[i] === 'w') {
                currentWalk[0]--;
            } else if (walk[i] === 'e') {
                currentWalk[0]++;
            }
        }
        if (currentWalk[0] === 0 && currentWalk[1] === 0) {
            isAWalk = true;
        }
    }
    return isAWalk;
};

// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e',])); 
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); //'should return true');
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); //'should return false');
// console.log(isValidWalk(['w'])); //'should return false');
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); //'should return false');