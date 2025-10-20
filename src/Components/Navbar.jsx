import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeLinkStyle = {
    color: '#3498db', // A distinct color for the active link
    fontWeight: 'bold',
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-white hover:text-blue-300 transition-colors">
          Kaamlay.com
        </NavLink>
        <div className="flex space-x-6">
          <NavLink 
            to="/" 
            className="hover:text-blue-300 transition-colors"
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}
          >
            Home
          </NavLink>
          <NavLink 
            to="/contact" 
            className="hover:text-blue-300 transition-colors"
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;