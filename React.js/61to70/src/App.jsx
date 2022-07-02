import React from "react";
import {Route,Routes}  from 'react-router-dom';
import About from './About';
import Contact from "./Contact";
import Menu from './Menu';

const App = () =>
{
  return(
    <>
    <Menu/>
    <Routes>
      <Route  exact path="/" component={Contact}/>
      <Route  exact path="/about/:Name" component={About}/>
      <Route  component={Error}/>
    </Routes>
   
    </>
  )
}
export default App;