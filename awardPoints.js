let alice = [17,28,30];
let bob =   [99,16,8];
let sums = [0,0];

for(let i=0; i<=alice.length-1; i++) {
    if(bob[i] > alice[i]) {
        sums[1]+=1;
    }
    
    else if(alice[i] == bob[i]){

    }
    else {
        sums[0]+=1;
    }

}
console.log(sums);