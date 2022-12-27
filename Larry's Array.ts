

function larryArray(A: number[]) {

   let sliced = A.slice(1);
    let condition = 'NO'
   for(let i=0; i<=3; i++){
    sliced.push(sliced.shift() as number);
    console.log(sliced);

    if(sliced[0] < sliced[1]&& sliced[1]< sliced[2]){
        condition = 'YES'
    }   

   }
   console.log(condition)

 
}
larryArray([1, 2,3,5])