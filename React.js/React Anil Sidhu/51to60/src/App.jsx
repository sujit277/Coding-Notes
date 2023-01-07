import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Menu from "./Menu";
import Service from "./Service";
import Contact from "./Contact";
import Error from "./Error";
import India from "./India";
import Russia from "./Russia";
import Protected from "./Protected";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Protected Component = {About} />}>
            <Route path="india" element={<India/>}/>
            <Route path="russia" element={<Russia/>} />
          </Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/service/:name" element={<Service />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;