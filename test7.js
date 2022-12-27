import comma from '/home/calebchris/customModules/commaEachNumber.js';


function beautifulTriplets(d, arr) {
    let count = 0;

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Check if arr[i] + d and arr[i] + 2 * d exist in the array
        if (arr.includes(arr[i] + d) && arr.includes(arr[i] + 2 * d)) {
            count++;
        }
    }

    return count;
}


let data = comma('1 6 7 7 8 10 12 13 14 19')
console.log(data)
console.log(beautifulTriplets(3, data));



function beautifulTriplets(d, arr) {
    let count = 0;
  
    // Iterate over the elements of the array
    for (let i = 0; i < arr.length; i++) {
      // Use binary search to find the element arr[i] + d in the array
      let j = binarySearch(arr, arr[i] + d);
      if (j !== -1) {
        // Use binary search to find the element arr[i] + 2 * d in the array
        let k = binarySearch(arr, arr[i] + 2 * d);
        if (k !== -1) {
          // If both elements are found, increment the count
          count++;
        }
      }
    }
  
    return count;
  }
  
  
  