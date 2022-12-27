

function base(s, d, m) {
        let test = [];
        
        for (let i = 0; i <s.length; i++) {
            test.push(s.slice(i,  i+ m));
        }
        console.log(test);
        
        if(test.length == 1) {
            return test.length;
        }
        
        let sums = [];
        for (let i = 0; i < s.length; i++) {
            let add = 0;
        for(let j=0; j<m; j++) {
            add+=test[i][j];
        }
        sums.push(add);
        }
        
        const result =sums.filter(x=> !Number.isNaN(x));
        console.log(result)
        
        let add = 0;
        for(let i=0; i<result.length; i++) {
            if(result[i] == d) {
                add++
            }
        }
        
        return (add);
        
        }
        console.log(base([1,2,1,3,2],3, 2))
        