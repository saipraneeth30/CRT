import React, {useState, useMemo} from 'react';

function Memo(){
    const [Value,setValue]=useState(5);
    const [number,setNumber]=useState(5);
    const Fact = useMemo(()=>{factorial(number)},[number]);
    return(
        <>
        <h1>{Fact}</h1>
        <h1>{Value}</h1>
        <button onClick={()=>{setValue(Value+1)}}>Click Me</button>
        <h1> Number : {number}</h1>
        <button onClick={()=>{setNumber(number+1)}}>Click Me</button>
        </>
    )
}
const factorial =(n) => {
    let answer=1;
    for(let i=n;i>=1;i--){
        answer=answer*i;
    }
    console.log("factorial of a number");
    return answer;
}
export default Memo;