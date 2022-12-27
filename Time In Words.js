function timeInWords(h, m) {

let numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty'
}
if(m>59 || h>13){
    return "Check the input again"
}

else if(h ==12 &&  m>=1 &&m<=29){
    let lastNumber = m.toString()[1]
   let difference = m.toString() - lastNumber

    return(`${[difference]} ${numbers[lastNumber]} minutes past ${numbers[h]}`)
}

else if(h ==12 && m>=31 && m<=59){
    h=1
    let lastNumber = m.toString()[1];
    let difference = 60 - m

    return(`${difference} minutes to ${numbers[h]}`)
}

if(m == 0){
    return(`${numbers[h]} o' clock`)
}

else if(m == 15){

    return(`quarter past ${numbers[h]}`)
}
else if(m == 30){
    return(`half past ${numbers[h]}`)
}
else if(m==45){
    h=h+1
    return `quarter to ${numbers[h]}`
}

else if(m>=1 && m<=29 && m.toString().length ==1){
   return m==1?(`${numbers[m]} minute past ${numbers[h]}`):(`${numbers[m]} minutes past ${numbers[h]}`)
}
else if(m>=1 && m<=29 && m.toString().length ==2){

     if(Object.keys(numbers).find(x=>x== m)){
        return(`${numbers[m]} minutes past ${numbers[h]}`)
    }
 
   else if(m.toString()[1] >=1 && m.toString()[1] <=9){
    let difference = eval(m - m.toString()[1])
        return(`${numbers[difference]} ${numbers[m.toString()[1]]} minutes past ${numbers[h]}`)
        
    }

}

else if(m>=31 && m<=59){
   
    h=h+1
    let difference = (60-m);
    let lastNumber = parseInt(difference.toString()[1])
    let result = difference - lastNumber
    if(Object.keys(numbers).find(x=>x == difference)){
        return(`${numbers[difference]} minutes to ${numbers[h]}`)
    }
    else{
        return(`${numbers[result]} ${numbers[lastNumber]} minutes to ${numbers[h]}`)
    }

}
}

console.log(timeInWords(7,45))