import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='flex justify-center gap-10 mt-10 text-xl font-semibold'>

       {/* 1st method */}
        <NavLink 
        style={(e)=>{
          return {
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive ? "bold" : ""
          };
        }} 
        to="/">Home</NavLink>

        {/* 2nd method array ko string me convert karta hai join */}
        <NavLink
          className={(e)=>{
            return [
              e.isActive ? "text-yellow-500" : "",
              e.isActive ? "Bold" : ""
            ].join(' ');
          }}
        to="/user">User</NavLink>


        {/* 3rd method   */}
        <NavLink to="/about">

          {(e)=>{
            return (
              <span className={[
                e.isActive ? "text-orange-500" : "",
                e.isActive ? "Bold" : ""
              ].join(' ')}>About</span>
            )
          }}
          
        </NavLink>
      </nav>
  )
}

export default Navbar;

// Navbar static banana hai matlab navbar change na ho bas niche wala content change ho
// <Routes></Routes> use kiys hai iske liye

// style={{color:'red'}} for static
