// import React from "react";
// import { assets } from "../assets/assets";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Experiences", path: "/experiences" },
//     { name: "About", path: "/about" },
//   ];

//   return (
//     <nav className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">

//       {/* Logo */}

//       <Link to="/">
//         <img
//           onClick={() => navigate("/")}
//           src={assets.logo}
//           alt="logo"
//           className="w-32 sm:w-44 cursor-pointer"
//         />
//       </Link>

//       {/* Centered Navigation Links */}
//       <div className="flex-1 flex justify-center">
//         <div className="flex gap-18">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Login Button */}
//       <button
//         onClick={() => navigate("/admin")}
//         type="button"
//         className="flex items-center gap-2 rounded-full font-semibold cursor-pointer bg-primary text-white px-10 py-2.5"
//       >
//         Login
//         <img src={assets.arrow} alt="arrow" className="w-3" />
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Experiences", path: "/experiences" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="w-32 sm:w-44 cursor-pointer"
        />
      </Link>

      {/* Centered Navigation Links */}
      <div className="flex-1 flex justify-center">
        <div className="flex gap-4 sm:gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              <Link
                to={link.path}
                onClick={() => setActiveLink(link.path)}
                className={`cursor-pointer text-gray-700 ${
                  activeLink === link.path && "text-white px-4 pt-0.5"
                } hover:text-primary transition-colors`}
              >
                {link.name}
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

      {/* Login Button */}
      <button
        onClick={() => navigate("/admin")}
        type="button"
        className="flex items-center gap-2 rounded-full font-semibold cursor-pointer bg-primary text-white px-10 py-2.5"
      >
        Login
        <img src={assets.arrow} alt="arrow" className="w-3" />
      </button>
    </nav>
  );
};

export default Navbar;
