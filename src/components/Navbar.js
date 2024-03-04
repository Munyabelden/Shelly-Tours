import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          My App
        </Link>
        <div className="space-x-4">
          <NavLink to="/" className="text-white" activeClassName="border-b-2 border-white">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white" activeClassName="border-b-2 border-white">
            About
          </NavLink>
          <NavLink to="/contact" className="text-white" activeClassName="border-b-2 border-white">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
