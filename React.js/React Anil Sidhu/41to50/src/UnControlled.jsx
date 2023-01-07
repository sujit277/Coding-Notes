import React, { useRef } from "react";

const UnControlled = () => {

    const input1Ref = useRef("");
    const input2Ref = useRef("");
    

    function submitForm(event) {
        event.preventDefault();
        console.log("Input1 Value " + input1Ref.current.value);
        console.log("Input2 Value " + input2Ref.current.value);
        const input3Ref = document.getElementById('package');
        console.log(input3Ref.value);
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <form onSubmit={submitForm}>
                    <h1>UnControlled Component</h1>
                    <input type="text" placeholder="Enter Name" name="name" ref={input1Ref}></input>
                    <input type="text" placeholder="Enter Company Name" name="company" ref={input2Ref}></input>
                    <input type="text" placeholder="Enter Package" name="package" id="package" defaultValue="12"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );

}

export default UnControlled;