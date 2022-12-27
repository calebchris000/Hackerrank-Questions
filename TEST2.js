



let array = [1, 4, 4, 4, 5, 3];

let updated = array.sort(); console.log(updated)
let one = []
for(let i=1; i<=5; i++) {
    one.push(updated.filter(x=>x==i));
}

let [typeOne, typeTwo, typeThree, typeFour, typeFive] = one;

console.log(Math.max(one[1]));


for(let i=0; i<one.length; i++) {
    if(one[i].length == Math.max(one)) {}
}

