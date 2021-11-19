import { Routes, Route, Navigate } from "react-router-dom"; 
import React from 'react'
import Form from "./pages/Form";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Carousel from "./components/Carousel";

function App() {
  return (
    
    <div className="App" style={{backgroundColor: '#000000'}}>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/formulario" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
    
  );
}

export default App;
