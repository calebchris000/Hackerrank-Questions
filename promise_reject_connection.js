const check = new Promise((resolve, reject) => {

    let connection = true;


    if(connection == false) {
        resolve("Connection is available");
    }
    else {
        reject("No connection");
    }});


    check.then(result => {
        console.log(result);

        check.catch(error => console.log(error));
    });