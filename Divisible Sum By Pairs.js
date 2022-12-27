
export function visibleSumPairs(n,k,ar);
function divisibleSumPairs(n, k, ar) {
    let emp = [];

    for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n; j++) {
    if ((ar[i] + ar[i + j]) % k == 0) {
    emp.push(ar[i] + ar[i + j])
    }
    }

    }
   return (emp.length);
}

console.log(divisibleSumPairs(5, 3, [1, 3, 2, 6, 1, 2]))
