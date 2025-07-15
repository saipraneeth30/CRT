import React, { useState } from "react";

function Like() {
    const [like, setLike] = useState(0);

    return (
        <>
            <h1>{like}</h1>
            <button onClick={() => setLike(like + 1)}>Like</button>
             <button onClick={() => setLike(like - 1)}>Dislike</button>
        </>
    );
}

export default Like;
