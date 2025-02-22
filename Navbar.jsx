import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="p-4 bg-gray-800 text-white flex justify-between">
    <Link to="/" className="text-lg font-bold">Foodie</Link>
    <div className="space-x-4">
      <Link to="/" className="hover:text-yellow-300">Home</Link>
      <Link to="/login" className="hover:text-yellow-300">Login</Link>
      <Link to="/register" className="hover:text-yellow-300">Register</Link>
    </div>
  </nav>
);

export default Navbar;
