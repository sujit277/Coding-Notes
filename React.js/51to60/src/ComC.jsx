import React from "react";
//import { useContext } from "react";
import { FirstName,LastName} from "./App";

/* Using Create Context API */

const ComC = () =>
{
    return(
    <>
    <FirstName.Consumer>
    {(Name)=>
    {
        return (
        <LastName.Consumer>
            {(Company)=>
            {
                return <h1>My Name is {Name} Company is {Company}</h1>
            }}
        </LastName.Consumer>);
    }}
    </FirstName.Consumer>
    </>
    );
};


/* Using  Use Context Hook */

/* const ComC = () =>
{
    const Name = useContext(FirstName);
    const Company = useContext(LastName);

    return  <h1> My Name is {Name} and Company is {Company}</h1>;
};*/

export default ComC;