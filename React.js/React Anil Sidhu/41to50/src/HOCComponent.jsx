import React, { useState } from "react";

const HOCComponent = () => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Higher Order Component</h1>
                <HOCRed comp={Counter} key="1" />
            </div>
        </>
    );
}

function HOCRed(props) {
    return (
        <>
            <div style={{ backgroundColor: "green" }}><props.comp /></div>
        </>
    )
}

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>{count}</h1>
            <button type="button" onClick={() => { setCount(count + 1) }}>Increment</button>
        </>
    );
}

export default HOCComponent;