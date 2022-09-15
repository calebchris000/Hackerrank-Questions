

function birthdayCakeCandles (candles) {
    let array = [];

        let max = Math.max(...candles);

for(let i = 0; i<=candles.length; i++) {
        if(candles[i] === max) {
            array.push(candles[i])

    }
}
console.log(array.length);
}


birthdayCakeCandles([3,2,1,3]);