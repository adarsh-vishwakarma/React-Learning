import React from 'react';
import Home from '../Components/Home';
import User from '../Components/User'; //.. dekh lena
import About from '../Components/About';
import UserDetails from '../Components/UserDetails';
import { Routes, Route } from 'react-router-dom';

function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:name" element={<UserDetails />} />

{/* 
        <Route path="/user" element={<User />} >
          <Route path="/user/:name" element={<UserDetails />} />        
        </Route> */}
{/* user data yaha bhi show karwa sakte hai */}

        <Route path="/about" element={<About />} />

      </Routes>
  )
}

export default Routing;
