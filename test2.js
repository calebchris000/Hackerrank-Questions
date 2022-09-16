

function multipleofFive(n) {
    let result = Math.ceil(n / 5) * 5;
    return result;
}
let test = [];

let array = [];
let indices = [];
let others = [];

let dump = [];
function studentGrades(grades) {
    let newArray = [...grades];

    newArray.filter(function(theArray, index){
        if(theArray == 67) {
            test.push(index)
        }
    })
    console.log(test)

    for(value of newArray) {

       if((multipleofFive(value) - value) < 3 && value >=38) {
        let here = value;
        array.push(multipleofFive(here));
        
       }
       else if((multipleofFive(value) - value) >= 3 && value >=38) {
        let here2 = value;
        indices.push(value)
       }
       else {
        let here3 = value;
        others.push(here3)
       }
        
  }
console.log(array);
console.log(indices);
console.log(others)
}
studentGrades([73, 67, 38, 33, 67, 38]);