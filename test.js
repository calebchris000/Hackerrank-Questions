

let two = 2;

let array = [2,3,6,7,8,9];
let dis = []

 let res  = array.map(x => x % two);

 let here = res.every(function(e) {
  if (e == 0) {
    dis.push(array.indexOf(e))
  }
  return dis;
 })

 console.log(dis)