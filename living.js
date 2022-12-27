

let array = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
let array2 = [2, 6];
let array3 = [24, 36];

let empty = [];

for (each of array2) {
    for (int of array) {
        empty.push(int % each)
    }
}

console.log(empty)