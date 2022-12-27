function cutTheSticks(arr) {
    var temp = arr.sort(function (a, b) { return a - b; });
    var result = [temp.length];
    while (temp.length > 0) {
        temp = temp.map(function (x) { return x - temp[0]; }).filter(function (x) { return x !== 0; });
        result.push(temp.length);
    }
    return result.filter(x=>x)
}
console.log(cutTheSticks([8, 8, 14, 10, 3, 5, 14, 12]));
