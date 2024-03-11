import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Shelly Tours
        </Link>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none menu"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? 'render' : ''
          } lg:flex space-x-4 navigation flex`}
        >
          <NavLink
            to="/"
            isActive={() => location.pathname === '/'}
            className="text-white"
            activeClassName="border-b-2 border-white"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            isActive={() => location.pathname === '/services'}
            className="text-white"
            activeClassName="border-b-2 border-white"
            onClick={toggleMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            isActive={() => location.pathname === '/about'}
            className="text-white"
            activeClassName="border-b-2 border-white"
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            isActive={() => location.pathname === '/contact'}
            className="text-white"
            activeClassName="border-b-2 border-white"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
