//State to Props
import React from "react";

class Appthird extends React.Component{
    constructor(props){
        super(props);
        this.state = {date:new Date()}
    }

    render(){
        return(
            <div>
                <h3>Current Time is :</h3>
                <SateToProps stp = {this.state.date} />
            </div>
        );
    }
}

class SateToProps extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.stp.toLocaleTimeString()}</h3>
            </div>
        );
    }
}
export default Appthird;