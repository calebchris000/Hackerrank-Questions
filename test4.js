var arr = [2,2,3,3,7,3];

var indices = [];

arr.filter(function(yourArray, index) {
 if(yourArray == 3){
   indices.push(index)
 }
});
console.log(indices)