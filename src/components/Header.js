import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "assets/image/Mr.bear.jpg";

export const Header = ({ links }) => {
  const [isOpen, seIsOpen] = useState(false);
  const handleNavbar = (val) => {
    console.log(val); // nilai diconsole log false dari useState(false) tpi kenapa return false karena di handleNavbar(!isOpen) dibawah yang artinya isOpen == true
    seIsOpen(val); // merubah nilai isOpen menjadi true dari data val di atas
  };
  const closeNavbar = (val) => {
    console.log(val);
    seIsOpen(val);
  };

  const [isScrolled, setIsSroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsSroll(!isTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const senja = require("assets/image/afternoon.jpg");
  return (
    <header
      className={`fixed top-0 left-0 w-full ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } z-10`}
    >
      <nav className="max-w-screen-2xl  mx-auto relative px-4 flex py-4 justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src={image}
            className="mr-3 h-9 shadow-md rounded-full sm:h-9"
            alt=""
          ></img>
          <span
            className="font-bold bg-repeat object-center drop-shadow-xl hover:drop-shadow-sm bg-center text-3xl text-transparent bg-clip-text 	"
            style={{
              backgroundImage: `url(${senja})`,
            }}
          >
            TENSEI
          </span>
        </Link>
        <div className="lg:hidden ">
          <button
            aria-controls="mobile-menu"
            aria-expanded="false"
            className="navbar-test flex items-center text-teal-300 p-3"
            onClick={() => handleNavbar(!isOpen)}
            // kenapa isi () => biar nanti datanya pas di console tidak banyak
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 gap-10 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          {links.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="text-slate-800 font-bold text-sm transition duration-150 opacity-100 hover:opacity-60"
                aria-current="page"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to={"/login"}
          className="hidden rounded-md lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6  bg-slate-400 font-bold tracking-wide hover:tracking-tighter transform duration-200"
        >
          LOGIN
        </Link>
        <Link
          to="/"
          className="hidden rounded-md lg:inline-block lg:mr-3 py-2 px-6  bg-blue-600 hover:bg-blue-700 font-bold tracking-wide hover:tracking-tighter transform duration-200"
        >
          SIGN
        </Link>
      </nav>
      <div className={`relative z-50 ${isOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-slate-600 opacity-10"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto ">
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl flex items-center font-bold leading-none">
              <img
                src={image}
                className="mr-3 h-9 shadow-md rounded-full sm:h-14"
                alt=""
              ></img>
              <span
                style={{ backgroundImage: `url(${senja})` }}
                className="font-bold bg-repeat object-center tracking-wide drop-shadow-xl hover:drop-shadow-sm bg-center text-3xl text-transparent bg-clip-text"
              >
                Tensei
              </span>
            </Link>
            <button className="" onClick={() => closeNavbar(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul className="">
              <li className="mb-1">
                <Link className="block p-4 text-sm font-semibold text-black hover:bg-gray-50 hover:text-gray-600 rounded ">
                  HOME
                </Link>
              </li>
              <li className="mb-1">
                <Link className="block p-4 text-sm font-semibold text-black hover:bg-gray-50 hover:text-gray-600 rounded ">
                  Sample Redux
                </Link>
              </li>
              <li className="mb-1">
                <Link className="block p-4 text-sm font-semibold text-black hover:bg-gray-50 hover:text-gray-600 rounded ">
                  Sample Filter
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link className="block px-4 py-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl ">
                LOGIN
              </Link>

              <Link className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl ">
                SIGN IN
              </Link>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span> © 2023 Tensei, Inc.</span>
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
};
