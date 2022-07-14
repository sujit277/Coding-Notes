import React from "react";
import { ReactDOM } from "react";

//Conditional Display of State Variable
class Appfirst extends React.Component {
    constructor(props) {
        super(props)
        this.state = { displayBio: true }
    }

    render() {
        const bio = this.state.displayBio ? (
            <div>
                <h3>We are Learning React</h3>
            </div>
        ):null;

        return(
            <div>
                <h1>Welcome to the Land of React</h1>
                {bio}
            </div>
        );
    } 
}

export default Appfirst;
