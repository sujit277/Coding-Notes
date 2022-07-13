import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

const Router = () => {
    return (
        <BrowserRouter>
                <NavLink to="/">Home</NavLink>
                <Routes>
                    <Route path="/" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
        </BrowserRouter>
    )
}

export default Router;