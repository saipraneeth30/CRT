function f() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let t = true;
            if (t) {
                resolve("success");
            }else{
                reject("unsuccessfull");
            }
        },5000);
    })
}
f()
    .then((data) => {
        console.log("promise resolved with data: ",data);
    })
    .catch((error)=>{
        console.log("Promise rejected with error:",error);
    });