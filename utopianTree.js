


let height = 1;

function utopianTree(n) {
    let output = [height];

        height *= 2;
        output.push(height);

    for(i=height; i<n; i++) {

        height +=1;
        output.push(height);
    }
    

    console.log(output);

}

utopianTree(4);

/*function calculatePeriod(x, y) {
    height += 2;

}*/






/*console.log("Period Zero: " + height)
let periodOne = height * 2;

console.log("Period One: " + periodOne);

let periodTwo = periodOne + 1;
console.log("Period Two: " + periodTwo)

let periodThree = periodTwo * 2;
console.log("Period Three: " + periodThree);

let periodFour = periodThree + 1;
console.log("Period Four: " + periodFour);

let periodFive = periodFour * 2;
console.log("Period Four: " + periodFive); */