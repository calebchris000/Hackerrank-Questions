function beautifulDays (x, y, z) {
    let result = 0;
    let sum;
    for(let i=x; i<=y; i++) {
        let reverse = parseInt(i.toString().split("").reverse().join(""));

        let sum = (i - reverse) / z;
        
        if(Number.isInteger(sum)) {
            result+=1;
        }


    }
        console.log(result)


}

beautifulDays(20,23,6);
