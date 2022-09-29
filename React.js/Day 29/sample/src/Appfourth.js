//PropTypes

import React from "react";
import PropTypes from "react";

class Login{
    constructor(userId,password){
        this.userId = userId;
        this.password =  password;
    }
}


class Appfourth extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.loginObj.userId}</h2>
            </div>
        );
    }
}

Appfourth.defaultProps = {
    loginObj:new Login("Sujit","Admin")
}

Appfourth.propTypes = {
    loginObj:PropTypes.instanceOf(Login)
}

export default Appfourth;