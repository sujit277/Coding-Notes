import React from "react";
import {NavLink} from "react-router-dom";

const Menu = () =>
{
    return(
        <>
        <NavLink to="/">Contact US</NavLink>
        <br></br><br></br>
        <NavLink to="/about">About US</NavLink>
        </>
    );

}
export default Menu;