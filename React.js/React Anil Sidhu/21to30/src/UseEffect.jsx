import React, { useState, useEffect } from "react";

const UseEffectHook = () => {

    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        console.log("Count Value is Incremented");
    }, [count])

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>UseEffect Hook in React</h1>
                {visible ? <h1>Sujit Kumar Verma</h1> : null}
                <button type="button" onClick={() => { setVisible(!visible) }}>Hide Component</button>
                <h1>{count}</h1>
                <button type="button" onClick={() => { setCount(count + 1) }}>Increment</button>
            </div>
        </>
    )
}

export default UseEffectHook;