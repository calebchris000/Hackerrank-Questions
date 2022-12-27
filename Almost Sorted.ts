

function almostSorted(arr: number[]) {

    let copied:number[] = arr.map(x=>x)
    const checkSorted = (array:number[])=>{
        let condition: boolean = true
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                condition = false
            }
        }
        return condition

    }

    if (checkSorted(arr)) {
        console.log("YES");
    }
    else {
        let k=1
        for (let index = 0; index < arr.length; index++) {
            for (let j=k; j< arr.length; j++) {
                 if (arr[index] > arr[j]) {
                     //swap
                     let temp = arr[index];
                     arr[index] = arr[j];
                     arr[j] = temp;
                     break;
            }
            }
            k++
            }
        console.log(checkSorted(arr), arr, copied)

        if(!checkSorted(arr)){
            let k = copied.length-1
            for (let index = 0; index < copied.length; index++) {
               for (let j = k; j > 0; j--) {
                if(copied[index]>copied[j]){
                    console.log([index, j])
                }
                
               }
               k--;
            }
        }
    }
}

almostSorted([1, 5, 4, 3, 2, 6])
