import React, { useState } from "react";

function Maps() {
    const [Value, setValue] = useState([
        { id: 1, value: "abc" },
        { id: 2, value: "def" },
        { id: 3, value: "ghi" },
        { id: 4, value: "jkl" }
    ]);

    return (
        <>
            <h1>Details</h1>
            <ul>
                {Value.map((val) => {
                    return <li key={val.id}>Value: {val.value}</li>;
                })}
            </ul>
        </>
    );
}

export default Maps;
