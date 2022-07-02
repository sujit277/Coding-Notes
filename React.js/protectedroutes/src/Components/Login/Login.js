import React from "react";

const Login = () => {

    function Auth() {
        localStorage.setItem("Authenticate", "true");
    }

    return (
        <>
            <div style={{textAlign:"center"}}>
                <h1>Login Page</h1>
                <button className="btn btn-primary" onClick={Auth} >Authenticate</button>
            </div>
        </>
    );
}

export default Login;