import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {error:null,error_info:null}
    }
    componentDidCatch(error,error_info){
        this.setState({error:error,error_info:error_info})
    }

    render(){
        console.log("Inside Render Of ErrorBoundary");
        if(this.state.error_info){
            return(
                <div>
                <h1>Something Went Wrong</h1>
                <h1>{this.state.error.toString()}</h1>
                <h1>More Info:{this.state.error_info.componentstack}</h1>
                </div>
            );
        }
        return this.props.children;
    }
}

class BuggyCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {counter : 1}
    }

    updateCounter = () =>{
        this.setState(({counter})=>({counter:counter+1}))
    }

    render(){
        if(this.state.counter == 4 ){
            throw new Error("Invalid Count");
        }
        return(
            <div>
                <h1 onClick={this.updateCounter}>Click on the Number to Update Value:{this.state.counter}</h1>
            </div>
        );
    }
}


class Appeight extends React.Component{
    render(){
        return(
            <div>
                <ErrorBoundary><BuggyCounter/></ErrorBoundary>
                <ErrorBoundary><BuggyCounter/></ErrorBoundary>
            </div>
        );
    }
}

export default Appeight;