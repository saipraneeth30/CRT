import React from 'react';

function Comp1(props) {
    return (
        <div class="details" >
        <h1>Name : {props.name}</h1>
        <h2>Age : {props.age}</h2>
        <p> Description</p>
        </div>
    );
}
export default Comp1;