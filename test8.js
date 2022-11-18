
console.time()
function countAppleAndOrange(s, t, a, b, apples, oranges) {
    //s and t are the house size
    let houseArray=[];
   for(let i=s; i<= t; i++) {
        houseArray.push(i)
    }

    //a and b are apples and oranges respectively
    let appleArray=[];
    for(let j=0; j<apples.length; j++) {     
        appleArray.push(apples[j] + a);
    }

    
    let orangeArray=[];
    for(let k =0; k<=oranges.length; k++) {
        orangeArray.push(oranges[k] + b);
    }

    //check distance of fruit from the house measurment
    let output = 0;
    let output2 = 0;
    
    let m=0;
    while(m<houseArray.length-1) {
        let n=0;
        while(n<appleArray.length-1) {
            if(houseArray[m] == appleArray[n]) {
                output+=1;
                
            }
             n++;
        }

        let p=0;
        while(p<orangeArray.length-1) {
            if(houseArray[m] == orangeArray[p]) {
                output2+=1
            }
            p++
        }

       m++;
    }



    console.log(`${output}\n${output2}`)
}

countAppleAndOrange(7, 11, 5, 15, [-2, 2, 1], [5, -6])
console.timeEnd()

   


