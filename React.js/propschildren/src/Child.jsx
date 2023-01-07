import React from "react";

const Child = (props) => {
    return (
        <>
            <h1>Child Component</h1>
            {props.children}
        </>
    )
}

export default Child;