import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-700 text-white py-4 px-6">
      <div className="flex items-center space-x-4">
        {/* <img
          src="https://www.registerkaro.in/"
          alt="RegisterKaro Logo"
          className="w-10 h-10"
        /> */}
        <span className="text-lg font-semibold">RegisterKaro</span>
      </div>
      <ul className="hidden md:flex space-x-6">
        <li>Home</li>
        <li>Our Services</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>About Us</li>
      </ul>
      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
        Talk An Expert
      </button>
    </nav>
  );
};

export default Navbar;
