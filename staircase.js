

function staircase(n) {
    let space = "";


        //This adds n spaces to space
        for(let i=1; i<=n; i++) {
            space+=" ";
        }
        let pound = "#";

        //This loop adds the pound sign to the end of space
        for(let i=0; i<n; i++) {
            space = space.slice(1);
            space = space.concat(pound);
            console.log(space);
        }


    }

staircase(4)