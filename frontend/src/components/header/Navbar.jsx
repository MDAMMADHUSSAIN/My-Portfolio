import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black w-full h-20 flex flex-wrap items-center justify-evenly text-blue-500 ">
      <h2 className="font-bold tracking-widest text-[21px]">
        MD AMMAD HUSSAIN
      </h2>
      <ul className="flex items-center justify-between gap-18 text-white font-semibold">
        <Link to="/">
          <li className="hover:text-blue-500">Home</li>
        </Link>
        <Link to="/about">
          <li className="hover:text-blue-500">About</li>
        </Link>
        <Link to="/teams">
          <li className="hover:text-blue-500">Teams</li>
        </Link>
        <Link to="/contact">
          <li className="hover:text-blue-500">Contact</li>
        </Link>
      </ul>
      <div className="flex items-center justify-center gap-7 text-gray-600">
        <Link to="/login">
          {" "}
          <h5 className="hover:text-blue-500">Login</h5>
        </Link>
        <p>|</p>
        <Link to="/signup">
          {" "}
          <h5 className="hover:text-blue-500">Signup</h5>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
