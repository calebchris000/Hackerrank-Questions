
function twoSets(a, b) {

  a.sort();
  b.sort();

  console.log(b)
  let last1 = parseInt(a.slice(-1));
  let last2 = parseInt(b.slice(-1));
  let between = [];

  let i = last1;
  while (i <= last2) {
    between.push(i)
    i++
  }
  //console.log(between)

  
  
  let allFactors = [];
  for(value of a) {
  for(each of between) {
    if(value % each == 0) {
     allFactors.push(each)
    }
  }
}
let allFactors2 = [];
for(item of b) {
  for(integer of between) {
    if(item % integer==0) {
      allFactors2.push(integer)
    }
  }
}
console.log(allFactors)
console.log(allFactors2)
}

twoSets([2, 6], [24, 36])