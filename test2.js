function twoSets(a, b) {

  let lastOne = parseInt(a.slice(-1));
  let lastTwo = parseInt(b.slice(-1));
  let between = [];

  for (let j = lastOne; j <= lastTwo; j++) {

    if ((a.map(x => j % x))[0] == 0 && (a.map(x => j % x))[1] == 0) {
      between.push(j);
    }
  }

  let between2 = []
  for (let k = 0; k < between.length; k++) {

    if (b.map(x => x % between[k])[0] == 0 && b.map(x => x % between[k])[1] == 0) {
      between2.push(between[k]);
    }
  }

  console.log(between);
  console.log(between2)
  console.log(between2.length);

}


twoSets([2, 6], [24, 36])