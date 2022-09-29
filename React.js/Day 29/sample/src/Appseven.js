import React from "react";
class Appseven extends React.Component{
    constructor(props){
        super(props);
        this.state = {date:new Date()}
    }

    updateName = () =>{
        this.setState({date:new Date()})
        this.forceUpdate();
    }

    render(){
        console.log("In the Render")
        return(
            <div>
                <h2>Current Time is:</h2>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                <button onClick={this.updateName}>Update Time</button>
            </div>
        )
    }
}

export default Appseven;