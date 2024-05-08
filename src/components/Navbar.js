import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 50;

      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`p-6 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="nav-header">
          <span>Shelly Tours</span>
        </Link>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none menu"
            aria-label="Toggle Menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? 'render' : ''
          } navigation`}
        >
          <NavLink
            to="/"
            isActive={() => location.pathname === '/'}
            className="nav-link"
            activeClassName="active"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            isActive={() => location.pathname === '/services'}
            className="nav-link"
            activeClassName="active"
            onClick={toggleMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            isActive={() => location.pathname === '/about'}
            className="nav-link"
            activeClassName="active"
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            isActive={() => location.pathname === '/contact'}
            className="nav-link"
            activeClassName="active"
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
