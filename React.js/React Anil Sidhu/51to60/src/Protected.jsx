import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {

    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {
        let user = localStorage.getItem('User');
        if (!user) {
            navigate('/');
        }

    })

    return (
        <>
            <div>
                <Component />
            </div>
        </>
    );
}

export default Protected;