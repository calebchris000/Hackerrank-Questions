
function gradingStudent(array) {

    let dump = [];
    let lower = [];

    for(let i=0; i<array.length; i++) {

        let result = Math.ceil(array[i] / 5) * 5;

        dump.push(result)
    }

    for(let i=0; i<dump.length; i++) {
        if((dump[i] % array[i]) == 2 && dump[i] >= 40) {
            lower.push(dump[i]);
        }
        else {
            let here = array[i];
            lower.splice(dump.indexOf(dump[i]), 1, here);
            array.indexOf(dump[i])
           
        }
       
    }

   
    console.log(lower);
}

gradingStudent([73, 67, 38, 33, 67, 38, 38, 67]);

//[75, 67, 40, 33]