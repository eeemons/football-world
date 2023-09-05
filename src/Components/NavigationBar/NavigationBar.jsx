import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex justify-between w-full">
          <Link to="/" className="text-xl font-bold">
            Football <span className="text-yellow-300">World</span>
          </Link>
          <div className="hidden lg:flex gap-2">
            <Link
              to="/"
              className="hover:text-red-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/league"
              className="hover:text-red-400 transition-colors duration-200"
            >
              League
            </Link>
          </div>
        </div>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleDrawer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
      {isOpen && (
        <div className="lg:hidden mt-4">
          {/* Drawer content */}
          <ul className="space-y-2">
            <li>
              <Link to="/" className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/league" className="block py-2">
                League
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
