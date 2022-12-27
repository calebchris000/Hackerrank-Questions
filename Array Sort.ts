

function arraySort(array: any) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            return arraySort(array)
        }

    }
    console.log(array)
}
arraySort([8, 1, 2, 4, 5, 10])


