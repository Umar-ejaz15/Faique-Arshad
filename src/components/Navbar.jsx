import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-black text-white border-b-[.05px] border-gray-800 items-center flex justify-center py-4">
      <nav className="flex container mx-auto px-4 justify-between items-center"> 
        <ul className="flex gap-10 items-center font-medium">
          <li className="hover:text-gray-300 transition-colors duration-300">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-gray-300 transition-colors duration-300">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-gray-300 transition-colors duration-300">
            <a href="#works">Works</a>
          </li>
          <li className="hover:text-gray-300 transition-colors duration-300">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-gray-300 transition-colors duration-300">
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <button className="bg-purple-500 hover:bg-transparent text-black hover:text-white px-6 py-2 rounded-md transition-all duration-300 border-2 border-purple-500">
          <a href="#hire" className="font-medium inline-block transform hover:translate-x-1 transition-transform duration-300">
            Hire Me <span className="inline-block transform hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;