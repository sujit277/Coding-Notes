import React from "react";

class ComA extends React.Component {
    constructor() {
        super();
        this.state = { Car: "Lamborgini" }
    }

    render() {
        return (
            <>
            <h1>My Favourite Car is {this.state.Car}</h1>
            </>
        );
    }
}

export default ComA;