import React, { useContext } from "react";
import { firstName, lastName } from "./AppA";

const AppB = () => {
    const first = useContext(firstName);
    const last = useContext(lastName);
    return (
        <>
            <h1>{first}{last}</h1>
        </>
    )
}

export default AppB;