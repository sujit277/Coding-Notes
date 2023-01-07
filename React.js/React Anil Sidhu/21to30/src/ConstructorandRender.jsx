import React from "react";

class ConstructorandRender extends React.Component {

    constructor() {
        super();
        console.log("Constructor is Called");
    }


    render() {
        return (
            <>
                <div style={{ textAlign: "center" }}>
                    <h1>Constructor and Render</h1>
                </div>
                { console.log("Render is Called")}
            </>
        );
    }
}

export default ConstructorandRender;
