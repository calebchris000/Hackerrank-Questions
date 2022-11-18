


let array = [1,1,2,2,3,3,3];

let count = []

array.forEach(x => count[x] ? count[x]++ : count[x] = 1)

console.log(count[1])