import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../pages/about";
import Home from "../pages/home";
import Experience from "../pages/experience";
import Contact from "../pages/contact";
import { DefaultSidebar } from "./Sidebar";



// Components for different routes


const NewNavbar = () => {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-night-dive text-white fixed w-full top-0 shadow-lg ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-lg font-bold hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>

              </Link>
            </div>

            {/* Menu Links */}
            <div className=" md:flex space-x-6">
              {/* <Link to="/" className="hover:text-gray-300">
                Home
              </Link> */}
              {/* <Link to="/about" className="hover:text-gray-300">
                About
              </Link> */}
              {/* <Link to="/experience" className="hover:text-gray-300">
                Experience
              </Link> */}
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            {/* <div className="md:hidden">
              <button
                type="button"
                onClick={<DefaultSidebar />}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-blue-700 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div> */}
            
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NewNavbar;
