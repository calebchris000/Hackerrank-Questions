

let array = [1, 4, 4, 4, 5, 3];

let newArray = array.sort();
console.log(newArray);

let group = [];
for(const each of newArray) {
    group[each] ? group[each] += 1 : group[each] = 1;
    }

console.log(group)


console.log(group.filter(x=>x==Math.max(group[x])))

