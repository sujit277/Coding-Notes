import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Menu from "./Menu";
import Service from "./Service";
import Contact from "./Contact";
import Error from "./Error";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/About" element={<About />}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/service" element={<Service />}></Route>
                    <Route path="*" element={<Error/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;