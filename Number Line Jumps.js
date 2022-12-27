

function kangaroo(x1, v1, x2, v2) {

    if (x1 == x2) {
        console.log("YES");
    }

    if (x1 !== x2) {
        let array0 = [];
        let array1 = [];
        for (let i = 0; i < 10000; i++) {
            x1 += v1;
            array0.push(x1);
            x2 += v2;
            array1.push(x2);
            if (array0[i] === array1[i]) {
                return ("YES");
            }

        }
        return "NO"

    }
    else {
        return ("NO");
    }

}

console.log(kangaroo(1113, 612, 1331, 610))