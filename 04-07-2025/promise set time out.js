let p = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        let t=true;
        if (t){
            resolve("success");
        }
        else{
            reject("Unsuccessful");
        }
    },5000);
})
console.log(p);
p
     .then((data) =>{
        console.log("Promise resolved with data:",data);
        console.log(p);
     })
        .catch((error) =>{
            console.log("Promise rejected with error:",error);
        });