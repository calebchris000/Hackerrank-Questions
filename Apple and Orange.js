

function appleAndOranges(s, t, a, b, apples, oranges) {

    const addDistances = (tree, array, newArray) => {
        for (let i = 0; i < array.length; i++) {
            newArray.push(array[i] + tree);
        }
        return newArray;
    }

    let addApple = [];
    let addOrange = [];

    let totApple = addDistances(a, apples, addApple);
    let totOrange = addDistances(b, oranges, addOrange);

    let res1 = 0;
    let res2 = 0;

    for (let k = s; k <= t; k++) {
        totApple.includes(k) ? res1++ : null;
    }

    for (let m = s; m <= t; m++) {
        totOrange.includes(m) ? res2++ : null;
    }
    console.log(res1)
    console.log(res2);
}

appleAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])


