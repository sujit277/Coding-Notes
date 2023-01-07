import React, { useRef } from "react";

const Useref = () => {

    const inputRef = useRef("");

    function handleInput(){
        console.log(inputRef.current.value);
        inputRef.current.style.color = "red";
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>UseRef in React</h1>
                <input type="text" ref={inputRef}></input>
                <button type="button" onClick={handleInput}>Handle Input</button>
            </div>
        </>
    );
}

export default Useref;