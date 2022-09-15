/*let names = "education";
let reg = /ion/;


const matches = reg.test(names);

if(matches == true) {
    console.log("There is " + reg + " in " + names);
}
else {
    console.log("There are no matches");
}*/

let testStr = "lolobe";
let ourRegex = /lo/g;
let d=testStr.match(ourRegex);
console.log(d);
