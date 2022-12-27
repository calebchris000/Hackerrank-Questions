

function breakRecords(scores) {

    let data = [
        [],
        [],
        []
    ]

    let [obtained, highscore, lowscore] = data;

    if (obtained.length == 0) {
        obtained.push(scores[0]);
        highscore.push(Math.max(obtained));
        lowscore.push(Math.min(obtained))
    }

    for (let i = 1; i < scores.length; i++) {
        obtained.push(scores[i]);

        if (highscore[i - 1] > obtained[i]) {
            highscore.push(highscore[i - 1])
            lowscore.push(Math.min(...obtained));
        }

        else {
            highscore.push(obtained[i]);
            lowscore.push(Math.min(...obtained))
        }
    }

    let totalHigh = [];
    let totalLow = [];
    for (let i = 0; i < scores.length; i++) {
        if (highscore[i - 1] < highscore[i]) {
            totalHigh.push(1);
        }
        if (lowscore[i - 1] > lowscore[i]) {
            totalLow.push(1);
        }
    }
    let total = []

    total.push(totalHigh.length, totalLow.length);
    console.log(total)

}

breakRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])

