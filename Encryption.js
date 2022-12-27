


function encryption(s){

    let wordLength = s.length;
    let row = Math.floor(Math.sqrt(wordLength));
    let column = Math.ceil(Math.sqrt(wordLength));
    console.log(row, column)

    if(row*column>=s.length){

        let inp = []
        for(let i=0; i<wordLength; i+=column){
            inp.push(s.slice(i, i+column))
        }
        console.log(inp)
        let string = ''
        for(let i=0; i<column; i++){
            for(let j=0; j<row; j++){
                string+=inp[j][i] !==undefined? inp[j][i]:''
            }
            string+=' '

        }
       return(string)

    }

    else{
        row+=1;
        console.log(row,column)
        let inp = []
        for(let i=0; i<wordLength; i+=column){
            inp.push(s.slice(i, i+column))
        }
    
        let string = ''
        for(let i=0; i<column; i++){
            for(let j=0; j<row; j++){
                string+=inp[j][i] !==undefined? inp[j][i]:''
            }
            string+=' '

        }
        return(string)
       
    }
   
}

console.log(encryption('chillout'))