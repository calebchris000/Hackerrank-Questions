



function utopianTree(n) {
    let height = 1;
    let output = [height];
    let number = 1;
          
    for(i=number; i<=n; i++) {

      height *= 2;
      output.push(height);
      i++;

      if(i <= n ) {

      height +=1;
      output.push(height);

      }
      
    }
    console.log(output)

  }

utopianTree(3);
