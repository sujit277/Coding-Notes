import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './Components/Products/Products';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
