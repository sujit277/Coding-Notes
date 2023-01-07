import React from "react";

const Composition = (props) => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Component Creation using Composition</h1>
                {props.children}
            </div>
        </>
    );
}

export default Composition;