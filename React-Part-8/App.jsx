import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Show from "./Components/Show";
import Services from "./Components/Services";

const App = () => {
  return <div className="p-10">
    <nav className="flex justify-center gap-10 mb-10">
      <Link to="/">Home</Link>
      <Link to="/show">Show</Link>
      <Link to="/services">Services</Link>
    </nav>
    <hr/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/show" element={<Show />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  </div>
};

export default App;
