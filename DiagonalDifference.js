function diagonalDifference(arr) {

    let a = 0;
    let b = 0;
    
    for(let i=0; i<arr.length; ) {
        for(let j=0; j<arr.length; j++) {
        a+=(arr[i][j]);
        i++
    }
    }
    
    for(let i=(arr.length-1); i>0;) {
        for(let j=0; j<arr.length; j++) {
        b+=(arr[i][j]);
        i--
        }
    }
    
    
    
    const difference = Math.abs(a - b);
    console.log(difference)
    
    } 
    
    diagonalDifference([
        [11,2,4],
        [4,5,6],
        [10,8,-12]
    ]);
    