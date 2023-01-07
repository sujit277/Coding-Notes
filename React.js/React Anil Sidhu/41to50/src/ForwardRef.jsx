import React, { useRef } from "react";
import ComA from "./ComA";

const ForwardRef = () => {

    const inputRef = useRef("Sujit Kumar Verma");

    function handleInput(){
        console.log(inputRef.current.value);
        inputRef.current.value = "Elon Musk";
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>FowardRef in React</h1>
                <ComA ref = {inputRef} />
                <button onClick={handleInput}>Handle Input</button>
            </div>
        </>
    );
}

export default ForwardRef;