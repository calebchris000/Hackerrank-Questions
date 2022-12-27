function howManyGames(p, d, m, s) {
    var pricePoint = [];
    for (var i = p; i >= -1000000; i -= d) {
        if (i <= m) {
            pricePoint.push(m);
        }
        else {
            pricePoint.push(i);
        }
    }
    var acc = 0;
    var result = [];
    for (var k = 0; k < pricePoint.length; k++) {
        if (acc + pricePoint[k] <= s) {
            result.push(pricePoint[k]);
            acc += pricePoint[k];
        }
        else {
            break;
        }
    }
    return result.length;
}
console.log(howManyGames(20, 3, 6, 85));
