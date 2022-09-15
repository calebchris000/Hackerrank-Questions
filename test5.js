

//This is an easy way of looping through arrays
function looping(array) {

    let loop = []

    for(let i=0; i<array.length; i++) {
        loop.push(array[i]);
    }
    return loop;
}

let a = [11, 2, 4];
let b = [4, 5, 6];
let c = [10, 8, -12];

let number  = 3;

for(let i=0; i<number; i++) {
    console.log(a[i]+b[i]);
}
