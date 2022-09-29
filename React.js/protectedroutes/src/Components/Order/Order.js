import React from "react";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"

const Order = () =>{
    const navigate = useNavigate();

    useEffect(() => {
        validate();
    }, [])

    function validate(){
        if(localStorage.getItem("Authenticate") === "false"){
            console.log("Redirect");
            navigate("/");
        }
    }

    return(<h1 style={{textAlign:"center"}}>Order Page</h1>);
}

export default Order;