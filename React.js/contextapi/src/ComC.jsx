import React from "react";
import { FirstName, LastName } from "./App";

/* Using Create Context API */

const ComC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(Name) => {
                    return (
                        <LastName.Consumer>
                            {(Company) => {
                                return (<>
                                    <div style={{ textAlign: "center" }}>
                                        <h1>My Name is {Name} Company is {Company}</h1>
                                    </div>
                                </>)

                            }}
                        </LastName.Consumer>);
                }}
            </FirstName.Consumer>
        </>
    );
};

export default ComC;