


function breakThrough (scores) {

    const object = {
        "obtained":  [scores[0]],
        "highscore": [],
        "lowscore":  [],
}

const {obtained, highscore, lowscore} = object;

if(highscore.length == 0 && lowscore.length == 0) {
    highscore.push(scores[0]);
    lowscore.push(scores[0]);
}

for(let i=1; i<scores.length; i++) {
obtained.push(scores[i]);

if(obtained[i] >= highscore[i-1]) {
    highscore.push(obtained[i]);
    lowscore.push(obtained[i-1])
}

else if(obtained[i] < highscore[i-1]){
    highscore.push(obtained[i-1]);
    if(obtained[i] >= lowscore[i-1]) {
        lowscore.push(obtained[i-2])
    }
    else {
        lowscore.push(obtained[i]);
    }
    
}

    
}
console.log(obtained)
console.log(highscore)
console.log(lowscore)
}


breakThrough([10, 5, 20, 20, 4, 5, 2, 25, 1])
