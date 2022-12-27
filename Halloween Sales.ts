

function howManyGames(p: number, d: number, m: number, s: number) {

    let pricePoint: number[] = []

    for (let i = p; i >= -1000000; i -= d) {
        if (i <= m) {
            pricePoint.push(m)
        }
        else {
            pricePoint.push(i)
        }
    }

    let acc = 0;
    let result: number[] = []
    for (let k = 0; k < pricePoint.length; k++) {

        if (acc + pricePoint[k] <= s) {
            result.push(pricePoint[k])
            acc += pricePoint[k]
        }
        else {
            break
        }
    }
    return result.length

}

console.log(howManyGames(20,3,6,85))

