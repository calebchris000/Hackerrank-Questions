

function chocolateFeast(n: number, c: number, m: number) {

    let count: number[] = [];


    let initialPurchaseValue: number = n / c;
    count.push(initialPurchaseValue);

    for (let i = 0; i < c; i++) {
        //let wrappers: number = 
        let newChocolateBars: number = Math.floor(initialPurchaseValue / m);
        count.push(newChocolateBars)
        let remainder: number = initialPurchaseValue % m
        let wrapper: number = newChocolateBars + remainder
        initialPurchaseValue = wrapper
    }

   return (count.reduce((acc, val) => acc + val))
}

console.log(chocolateFeast(6,2,2))

