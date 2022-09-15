
function gradingStudent(array) {

    let dump = [];

    for (let i = 0; i < array.length; i++) {


        let ana = Math.ceil(array[i] / 5) * 5;

    let check = dump[i] - array[i];
    dump.push(ana);
    if (dump[i] <= 3) {
       
        console.log(dump)
    }

    }

   

    /*for(let i=0; i<dump.length; i++) {
    
        
    
        
    }
    */

}

gradingStudent([73, 67, 38, 33]);