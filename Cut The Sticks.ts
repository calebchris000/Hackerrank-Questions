

function cutTheSticks(arr:number[]) {
  let temp:number[]= arr.sort((a,b)=> a-b)
    let result:number[] = [temp.length]

   let lastindex = arr.length -1
    while(temp.length >1) {
       
            temp = temp.map(x=>x-arr[0]).filter(x=>x!==0);
        
        result.push(temp.length)

    }
   return result

}

console.log(cutTheSticks([1,2,3]))