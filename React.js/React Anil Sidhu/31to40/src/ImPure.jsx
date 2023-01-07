import React from "react";

class ImPure extends React.Component {

    constructor() {
        super();
        this.state = { count: 0 }
    }

    increment() {
        this.setState({ count: this.state.count})
    }

    render() {
        console.log("Render is Called");
        return (
            <>
                <div style={{ textAlign: "center" }}>
                    <h1>ImPure Component</h1>
                    <h1>{this.state.count}</h1>
                    <button type="button" onClick={() => { this.increment() }}>Increment</button>
                </div>
            </>
        );
    };

}

export default ImPure;