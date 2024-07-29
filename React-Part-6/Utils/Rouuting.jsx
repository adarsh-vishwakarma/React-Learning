import React from 'react';
import Home from '../Components/Home';
import User from '../Components/User'; //.. dekh lena
import About from '../Components/About';
import { Routes, Route } from 'react-router-dom';

function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<About />} />

      </Routes>
  )
}

export default Routing
