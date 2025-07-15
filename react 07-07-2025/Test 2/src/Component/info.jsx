import React from "react";

function Info(props) {
    return(
        <div class="details">
        <h1>{props.name}</h1>
        <div class="image">
            <img class="anu" src={props.image} alt="Img"></img>
        </div>
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
            <h1>Class: {props.class}</h1>
            <h1>Phone: {props.phone}</h1>
        </div>
    );
}
export default Info;