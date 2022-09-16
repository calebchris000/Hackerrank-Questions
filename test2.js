

function multipleofFive(n) {
    let result = Math.ceil(n / 5) * 5;
    return result;
}

let array = [];
let indices = [];

let others = [];
function studentGrades(grades) {
    let newArray = [...grades];

    for(value of newArray) {
        if((multipleofFive(value) - value) < 3 && value>=38) {
            array.push(value);
            indices.push(newArray.indexOf(value));
        }
        
    }
 console.log(array)
 console.log(indices)

}

studentGrades([73, 67, 38, 33, 67, 38]);