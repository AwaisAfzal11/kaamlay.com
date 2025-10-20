import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Kaamlay.com. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-2">Your Trusted Home & Office Maintenance Partner</p>
        <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-pink-500">Instagram</a>
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;