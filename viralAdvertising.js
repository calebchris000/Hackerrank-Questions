


function viralAdverising (n) {
        let totalShares = 5;
        let arrays = 0;
        for(let i=0; i<n; i++) {
        let likes = Math.floor(totalShares/2);
        arrays+=likes;
        totalShares = likes * 3;

        }

        console.log(arrays)

}

viralAdverising(5)