import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import User from "./User";

const Main = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/user/:email" element={<User />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Main;