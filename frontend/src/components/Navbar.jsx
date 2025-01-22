import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-blue-700 text-white py-4 px-6">
      <div className="flex items-center space-x-4">
        {/* Logo (Optional) */}
        <span className="text-lg font-semibold">RegisterKaro</span>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex space-x-6 md:block mt-4 md:mt-0`}
      >
        <li>Home</li>
        <li>Our Services</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>About Us</li>
      </ul>

      {/* Button */}
      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
        Talk An Expert
      </button>
    </nav>
  );
};

export default Navbar;
