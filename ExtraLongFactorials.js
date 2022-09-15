
function extraLongFactorials(n) {
    let empty = 1n;
    if(n == 0 || n==1n) {
    console.log(String(empty));
  }

    else {
    for(let i=BigInt(n); i>=1n; i--) {
        empty = empty * i;
        
    }
 
    console.log(String(empty));
  }
  
}

extraLongFactorials(25);


