
function multipleOfFive(n) {
    let number = Math.ceil(n /  5) * 5;
    return number;
}







function gradingStudent (grades) {
    let array = [];

    for(let i=0; i<grades.length; i++) {
       
        if((multipleOfFive(grades[i]) % grades[i]) < 3 && grades[i] >=38) {
            let result = multipleOfFive(grades[i]);
            array.push(result);
            
        }
        else {
            array.push(grades[i])
        }
    }
    console.log(array)
}

gradingStudent([64,24,68,14,53,49,45,99,55,24,59,67,8,76,37,24,24,73,81,37,47,63,99,63,40,54,82,9,80,84,15,32,51,18,70,4,86,59,32,68,22,1,71,51,81,22,35,65,9,17,94,68,40,39,52,94,84,13,68,95]);


