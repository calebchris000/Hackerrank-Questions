


function miniMaxSum (arr) {

    let allocate = []
    
    for (let i = 0; i < arr.length; i++) {
        let modArr = [...arr];
        modArr.splice(i, 1);
    
        allocate.push(modArr)
    }
    
    let sums = [];
    
    
    for (let j = 0; j < allocate.length; j++) {
    
        let add = 0;
        for (const arraying of allocate[j]) {
    
            add += arraying;
    
        }
        sums.push(add);
    
    }

    console.log(Math.min(...sums) ,Math.max(...sums));
}
miniMaxSum([7, 69, 2, 221, 8974]);