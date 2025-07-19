import React, {useState} from "react";

function Change(){
    const [value,setvalue]=useState("");
    const changename = (e)=>{
        setvalue(e.target.value);
    }
    return(
        <>
        <input type="text" onChange={changename} placeholder = "Enter your Name" value={value}></input>
        <h1>{value}</h1>
        </>
    );
}
export default Change;