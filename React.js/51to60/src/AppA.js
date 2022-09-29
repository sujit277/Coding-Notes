import React, { createContext } from "react";
import AppB from "./AppB";

const firstName = createContext("Sujit");
const lastName = createContext("Verma");

const AppA = () => {
    return <AppB />
}

export default AppA;
export { firstName, lastName };