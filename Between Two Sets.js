


function betweenTwoSets (arrayOne, arrayTwo) {

    let [a, b, c,...d] = [...arrayOne, ...arrayTwo];
    
    const inBetween = (firstNumber, secondNumber) => {
        let output = [];
        let i=firstNumber;
        while(i<=secondNumber) {
            output.push(i);
            i++
        }
        return output;
    }

    let looper = inBetween(b,c); console.log(looper)
    let match = inBetween(b, c).filter(x=> x%a==0 && x%b==0);
    console.log(match)

   let result = looper.filter(x=>x)
}
betweenTwoSets([2,4], [16, 32, 96])