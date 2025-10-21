import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Kaamlay.com</h3>
            <p className="pr-4">Pakistan’s leading membership-based maintenance company. We provide trusted, high-quality services to ensure your home and office are always in perfect condition.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Services</Link></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">Islamabad, Pakistan</li>
              <li className="flex items-start">0300-1311111</li>
              <li className="flex items-start">Kaamlay.com@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Kaamlay.com Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;