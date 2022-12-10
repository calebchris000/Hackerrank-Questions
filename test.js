

function climbingTheLeaderBoard(ranks, scores){
   let ranksAll = [...new Set(ranks)];
   console.log(ranksAll)

   let position = [];

   for(let i=0; i<scores.length; i++){
      position.push(ranks.filter(x=>x>=scores[i]).length+1)
   }
   console.log(position)
}

climbingTheLeaderBoard([100,90,80,80,70], [50, 75, 95, 120]);

let arr = [100,90,80,80,70];
let bar = [50, 50, 95, 120]

// console.log(arr.some(x=>x>2))

console.log(arr.filter(x=>x>=75))

