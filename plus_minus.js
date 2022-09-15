


function plusMinus(arr) {

    let positive = [];
    let negative = [];
    let zero = []

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 0) {
            zero.push(arr[i]);
        } 

        else if (arr[i] >= 1) {
            positive.push(arr[i]);
        }

        else if (arr[i] < 0) {
            negative.push(arr[i]);
        }

        
    }

    console.log(positive);
    console.log(zero);
    console.log(negative);

        console.log((positive.length / arr.length).toFixed(6));
        console.log(Math.abs((negative.length/arr.length)).toFixed(6));
        console.log(Math.abs(zero.length/arr.length).toFixed(6)); 
    }

    plusMinus([-4, 3, -9, 0, 4, 1])