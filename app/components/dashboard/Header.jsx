import React from 'react';

const Header = () => {
  return (
    <header className="w-full">
      {/* Logo and Icons */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12"
            />
          </div>

          {/* Centered Logo Text */}
          <div className="flex justify-center items-center">
            <span className="font-bold text-2xl">LOGO</span>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-gray-900">
              <i className="fas fa-search"></i>
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <i className="fas fa-heart"></i>
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <i className="fas fa-shopping-bag"></i>
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <i className="fas fa-user"></i>
            </button>
            <select className="text-sm border-none focus:outline-none">
              <option value="ENG">ENGLISH</option>
              <option value="SPA">SPANISH</option>
              <option value="FRE">FRENCH</option>
            </select>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-center space-x-8">
          <a href="#" className="text-sm font-medium hover:text-gray-600">
            SHOP
          </a>
          <a href="#" className="text-sm font-medium hover:text-gray-600">
            SKILLS
          </a>
          <a href="#" className="text-sm font-medium hover:text-gray-600">
            STORIES
          </a>
          <a href="#" className="text-sm font-medium hover:text-gray-600">
            ABOUT
          </a>
          <a href="#" className="text-sm font-medium hover:text-gray-600">
            CONTACT US
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;