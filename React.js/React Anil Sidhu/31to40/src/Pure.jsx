import React from "react";
import ComA from "./ComA";

class Pure extends React.Component {

    constructor() {
        super();
        this.state = { count: 0 }
    }

    increment() {
        this.setState({ count: this.state.count })
    }

    render() {
        console.log("Render is Called");
        return (
            <>
                <div style={{ textAlign: "center" }}>
                    <h1>Pure Component</h1>
                    <h1>{this.state.count}</h1>
                    <button type="button" onClick={() => { this.increment() }}>Increment</button>
                    <ComA count={this.state.count} />
                </div>
            </>
        );
    };

}

export default Pure;