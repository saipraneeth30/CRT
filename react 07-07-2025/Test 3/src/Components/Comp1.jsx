import React, {useEffect,useState} from "react";

function Comp1() {
    const [value,setValue] = useState(0);
    const [number,setNumber] = useState(0);
    useEffect(()=>{
        alert("Hello");
    },[number])
    return (
        <>
        <h1> {value}</h1>
        <button onClick={()=>{
            setValue(value+1);
        }}>Click Me!</button>
        <br />
        <h1>{number}</h1>
        <button onClick={()=>{
            setNumber(number+1);
        }}>Number   </button>
        </>
    );
}
export default Comp1;