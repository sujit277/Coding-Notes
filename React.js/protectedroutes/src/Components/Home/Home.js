import React from "react";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        localStorage.setItem("Authenticate","false");
    }, [])


    return (
        <h1 style={{ textAlign: "center" }}>Home Page</h1>
    );
}

export default Home;