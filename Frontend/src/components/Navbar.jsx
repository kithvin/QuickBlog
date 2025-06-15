import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const location = useLocation(); // Get current route for active link highlighting
  const { navigate, token } = useAppContext(); // Access context for navigation and auth token
  const [activeLink, setActiveLink] = useState(location.pathname); // Track the currently active nav link
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Toggle mobile nav menu

  // Define navigation links

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Experiences", path: "/experiences" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:mx-8 md:mx-20 xl:mx-32 gap-4 sm:gap-0">
      
      {/* Logo and Mobile Menu Button */}

      <div className="flex justify-between items-center w-full sm:w-auto">
        <Link to="/">
          <img
            src={assets.logo}
            alt="logo"
            className="w-28 sm:w-32 md:w-44 cursor-pointer"
          />
        </Link>

        {/* Hamburger menu for mobile view */}

        <button
          className="sm:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links - Hidden on mobile unless menu is open */}

      <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} sm:flex flex-1 justify-center order-last sm:order-none w-full sm:w-auto mt-4 sm:mt-0`}>
        <div className="flex gap-3 sm:gap-4 md:gap-8 flex-wrap justify-center">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              <Link
                to={link.path}
                onClick={() => {
                  setActiveLink(link.path);
                  setMobileMenuOpen(false); // Close menu on link click
                }}
                className={`cursor-pointer text-gray-700 ${
                  activeLink === link.path && "text-white px-4 pt-0.5"
                } hover:text-primary transition-colors`}
              >
                {link.name}

              {/* Highlight active link with animation */}

                {activeLink === link.path && (
                  <motion.div
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full"
                  />
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Login / Dashboard Button */}

      <button
        onClick={() => navigate("/admin")}
        type="button"
        className="text-sm sm:text-base flex items-center gap-2 rounded-full font-semibold cursor-pointer bg-primary text-white px-6 sm:px-8 md:px-10 py-2 sm:py-2.5"
      >
        {token ? 'Dashboard' : 'login'}
        <img src={assets.arrow} alt="arrow" className="w-3" />
      </button>
    </nav>
  );
};

export default Navbar;