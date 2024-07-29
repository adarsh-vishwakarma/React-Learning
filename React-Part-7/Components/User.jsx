import React from "react";
import { Link, Outlet } from "react-router-dom";

function User() {
  return (
    <>
      <div className="w-full h-96 relative flex items-center justify-center">
        <h1 className="text-6xl font-semibold bg-orange-500 text-white rounded-md py-2 px-5 text-center">
          USER
        </h1>
      </div>

      <div className="flex flex-col w-1/4">
        <Link
          to="/user/john"
          className="p-3 gap-4 mb-2 text-xl font-semibold bg-blue-400 hover:bg-blue-600 text-white rounded-md text-center"
        >
          John
        </Link>

        <Link
          to="/user/slayer"
          className="p-3 gap-4 mb-2 text-xl font-semibold bg-blue-400 hover:bg-blue-600 text-white rounded-md text-center"
        >
          Slayer
        </Link>

        <Link
          to="/user/inoske"
          className="p-3 gap-4 mb-2 text-xl font-semibold bg-blue-400 hover:bg-blue-600 text-white rounded-md text-center"
        >
          Inoske
        </Link>
        {/* <Outlet /> */} 
        {/* user data yaha bhi show karwa sakte hai */}
      </div>
      
    </>
  );
}

export default User;
