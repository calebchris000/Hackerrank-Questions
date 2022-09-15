 function prisoners(n,m,s) {
 
 // n - k + 1 is number of
    // positions before we reach
    // beginning of circle.
    // If m is less than this value,
    // then we can simply return
    // (m-1)th position
    if (m <= n - s + 1)
     console.log(m + s - 1);
 
    // Let us compute remaining items
    // before we reach beginning.
    m = m - (n - s + 1);
 
    // We compute m % n to skip
    // all complete rounds. If we
    // reach end, we return n
    // else we return m % n
   return (m % n == 0) ? n : console.log(m % n);
 }
 
// Driver code
let n = 5;
let m = 8;
let k = 2;
prisoners(3, 2, 2);