import React from "react";

const Style = () => {

    const style1 = {
        color:"red",
        backgroundColor:"yellow"
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Styles in React</h1>
                <h1 style={{ color: "red" }}>Sujit Kumar Verma</h1>
                <h1 style={style1}>EPAM Systems</h1>
            </div>
        </>
    );
}

export default Style;