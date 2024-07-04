"use client";

import React, { useState } from "react";
import Image from "next/image";

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-500 bg-opacity-50">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-gray-800 py-4 px-6 text-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src={"/assets/images/zoro.png"}
              width={50}
              height={50}
              className="mr-2 rounded-full"
              alt="Logo"
            />
            <span className="text-2xl font-semibold font-kashiki font-regular">
              Kashiki
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-amber-300 hover:text-green-300">
              Home
            </a>
            <a href="/about/" className="text-white hover:text-amber-300">
              About
            </a>
            <a href="/skill/" className="text-white hover:text-amber-300">
              Skills
            </a>
            <a href="/project/" className="text-white hover:text-amber-300">
              Projects
            </a>
            <a href="/contact/" className="text-white hover:text-amber-300">
              Contact
            </a>
          </nav>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className={`w-6 h-6 transition-transform transform ${
                isMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-sky-950 p-6 rounded-lg size-60 shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Menu</h2>
              <button
                className="text-black focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <nav className="mt-4 space-y-2">
              <a href="#" className="block text-amber-300 hover:text-green-300">
                Home
              </a>
              <a
                href="/about/"
                className="block text-black hover:text-amber-300"
              >
                About
              </a>
              <a
                href="/skill/"
                className="block text-black hover:text-amber-300"
              >
                Skills
              </a>
              <a
                href="/project/"
                className="block text-black hover:text-amber-300"
              >
                Projects
              </a>
              <a
                href="/contact/"
                className="block text-black hover:text-amber-300"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative h-screen">
        <Image
          src={"/assets/images/bg night.jpg"}
          layout="fill"
          objectFit="cover"
          alt="Background"
        />
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="flex flex-col items-center md:items-start md:mb-20 md:ml-10">
            <h1 className="text-center md:text-left font-bold text-black mb-3 font-kashiki text-2xl ml-7">
              Hi, I'm
            </h1>
            <h1 className="text-center md:text-left md:ml-5 font-bold text-black mb-2 font-kashiki text-5xl">
              Joemari Obrial
            </h1>
            <span className="text-center md:text-left md:ml-5 font-bold text-black mb-2 font-kashiki text-5xl text-sky-950">
              Network Engineer
            </span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded mt-4 ml-5">
              Hire Me
            </button>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 ml-6">
              <a href="https://facebook.com">
                <img
                  src="/assets/images/facebook.svg"
                  alt="Facebook"
                  className="h-6 w-6 hover:opacity-80"
                />
              </a>
              <a href="https://instagram.com">
                <img
                  src="/assets/images/insta.svg"
                  alt="Instagram"
                  className="h-6 w-6 hover:opacity-80"
                />
              </a>
              <a href="https://github.com">
                <img
                  src="/assets/images/github.svg"
                  alt="GitHub"
                  className="h-6 w-6 hover:opacity-80"
                />
              </a>
            </div>
          </div>

          <div className="md:mr-20 mb-20 mt-10 md:mt-0">
            <Image
              src={"/assets/images/joemari.jpg"}
              width={350}
              height={150}
              className="rounded-lg"
              alt="Joemari"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-2">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Joemari Obrial. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Page;
