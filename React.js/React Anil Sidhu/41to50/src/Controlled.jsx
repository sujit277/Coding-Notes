import React, { useState } from "react";

const Controlled = () => {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Controlled Component</h1>
                <h1>{count}</h1>
                <button type="buton" onClick={increment}>Increment</button>
            </div>
        </>
    );
}

export default Controlled;