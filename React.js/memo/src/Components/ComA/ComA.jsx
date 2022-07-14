import React from "react";

const  ComA = (props) =>{
    return(
        <>
        <h1>ComA</h1>
        {console.log("A")}
        </>
    );
}

export default React.memo(ComA);