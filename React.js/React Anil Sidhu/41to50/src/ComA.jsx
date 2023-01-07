import React, { forwardRef } from "react";

const ComA = (props,ref) => {

    return (
        <>
            <input type="text" name="name"ref={ref}></input>
        </>
    );
}

export default forwardRef(ComA);