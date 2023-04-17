import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Counter from "./Components/Counter";
import Employee from "./Components/Employee";
import About from "./Components/About";
import User from "./Components/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
