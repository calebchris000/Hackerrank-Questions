function climbingLeaderboard(scores, alice) {
    // create a new array of unique scores in descending order
    const uniqueScores = [...new Set(scores)].sort((a, b) => b - a);

    // create a result array to store Alice's rankings
    const rankings = [];

    // initialize variables for Alice's current score and current ranking
    let aliceScore = alice[alice.length - 1];
    let aliceRanking = uniqueScores.length + 1;

    // iterate over Alice's scores in reverse order
    for (let i = alice.length - 1; i >= 0; i--) {
        // update Alice's current score
        aliceScore = alice[i];

        // find Alice's ranking for the current score
        while (aliceScore >= uniqueScores[aliceRanking - 1]) {
            aliceRanking--;
        }

        // add the ranking to the result array
        rankings.unshift(aliceRanking);
    }

    // return the result array
    return rankings;
}

console.log(climbingLeaderboard([100,90,90,80], [70,80,105]))