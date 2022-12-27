
function kaprekarNumbers(p: number, q: number) {

    let resultingNumbers:string = ''

    for(let i=p; i<=q; i++){
        let squared = (Math.pow(i,2)).toString();
        let firstNumber:number;
        let secondNumber:number;
        if(squared.length == 1){
            firstNumber = parseInt(squared);
            secondNumber = 0
        }
        else{
            firstNumber = parseInt(squared.slice(0, squared.length/2));
            secondNumber = parseInt(squared.slice(squared.length/2));
        }
        
                
         if(firstNumber+secondNumber == i){
             resultingNumbers+= i+' '
         }

    }
    return resultingNumbers.length == 0? "INVALID RANGE": resultingNumbers
}

kaprekarNumbers(1, 100);

