let p = new Promise((resolve,reject) =>{
    let f=false;
    if(f===true){
        resolve("done");
    }
    else {
        reject("undone");

    }
});
console.log(p);
p
    .then((data) => {
        console.log("Practice resolve with value: ",data);
    })
    .catch((error) => {
        console.log("Practice rejected with error: ", error);
    });