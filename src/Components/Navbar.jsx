import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const activeLinkStyle = 'text-primary font-semibold';
  const inactiveLinkStyle = 'text-dark hover:text-primary transition-colors duration-300';

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-primary">
          Kaamlay
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLinkStyle : inactiveLinkStyle)}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeLinkStyle : inactiveLinkStyle)}
          >
            Contact Us
          </NavLink>
        </div>
        <Link 
          to="/contact" 
          className="hidden md:inline-block bg-accent text-dark font-bold py-2 px-6 rounded-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105"
        >
          Get a Quote
        </Link>
        {/* Mobile Menu Button can be added here */}
      </nav>
    </header>
  );
};

export default Navbar;