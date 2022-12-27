


function chocolateFeast(n, c, m) {
    //Amount of chocolate eaten
    var count = [];

    //First purchase of chocolate
    var initialPurchaseValue = n / c;
    count.push(initialPurchaseValue);

    for (var i = 0; i < c; i++) {
        //Amount of chocolate derivable from wrappers
        var newChocolateBars = Math.floor(initialPurchaseValue / m);
        count.push(newChocolateBars);
        //Remainder of the wrapper
        var remainder = initialPurchaseValue % m;
        var wrapper = newChocolateBars + remainder;
        initialPurchaseValue = wrapper;
    }
    return Math.floor(count.reduce(function (acc, val) { return acc + val; }));
}
//chocolateFeast(9266, 90, 5262)


test('chocolateFeast', () => {
    expect(chocolateFeast(10, 2, 5)).toBe(6);
});