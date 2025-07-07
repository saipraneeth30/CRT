function getData(dataId)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Fetching data for ID:", dataId);
            if(dataId<=103)
                resolve("success");
            else{
                reject("unsuccessful");
            }
        },2000);
    });
}
getData(101)
     .then((res)=>{
        return getData(102);
     })
     .then((res)=>{
        return getData(103);
     })
     .then((res)=>{
        return getData(104);
     })
     .then((res)=>{
        console.log("All data fetched successfully");
     })
     .catch((error)=>{
        console.error("error occurred:",error);
     });    