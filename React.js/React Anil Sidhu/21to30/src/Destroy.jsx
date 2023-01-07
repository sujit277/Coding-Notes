import React from "react";

class Destroy extends React.Component {

    constructor() {
        super();
    }

    componentWillUnmount(){
        console.log("Component is Destroyed");
    }

    render() {
        return (
            <>
                <div style={{ textAlign: "center" }}>
                    <h1>Destroy Component</h1>
                </div>
            </>
        );
    }

}

export default Destroy;