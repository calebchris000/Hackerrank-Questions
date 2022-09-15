let i = 20;
let j = 23;

let sum = 0;

let k = 6;

for(let a=i; a<=j; a++) {
    let reverseNum = parseInt(a.toString().split("").reverse().join(""));
    
    let result = (a - reverseNum) / k;

    if(Number.isInteger(result)) {
     sum+=1;
    }


}
console.log(sum);






/*let looper = 0;
    for(let a = 0; a <= j  ; a++) {
           let integer =  parseInt(i.toString().split("").reverse().join(""));
        //    let result = (a - integer) / k;
     if(Math.abs(i - integer) % k === 0){
        beautifulDays++;
     }
        
    }
console.log(beautifulDays);
    let num = 24 + "";

    let reverseNum = num.split("").reverse().join("");
    */
