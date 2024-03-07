import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation;

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Shelly Tours
        </Link>
        <div className="space-x-4 navigation flex">
          <NavLink to="/" isActive={() => location.pathname = '/' } className="text-white" activeClassName="border-b-2 border-white">
            Home
          </NavLink>
          <NavLink to="/services" isActive={() => location.pathname = '/' } className="text-white" activeClassName="border-b-2 border-white">
            Services
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
