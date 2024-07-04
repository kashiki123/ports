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
            <a href="/" className="text-white hover:text-green-300">
              Home
            </a>
            <a href="/about/" className="text-white hover:text-amber-300">
              About
            </a>
            <a href="#" className="text-amber-300 hover:text-green-300">
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
              <a href="/" className="block text-black hover:text-amber-300">
                Home
              </a>
              <a
                href="/about/"
                className="block text-black hover:text-amber-300"
              >
                About
              </a>
              <a href="#" className="block text-amber-300 hover:text-green-300">
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
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-evenly mb-20">
          <div className="bg-gray-800 py-5 px-4 text-white mx-2 my-4 rounded-lg max-w-full md:max-w-lg mb-20">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Programming Languages
            </h1>
            <p className="mt-4 text-start text-sm md:text-base">
              JavaScript Python Java C# Php C++
            </p>
          </div>
          <div className="bg-gray-800 py-5 px-4 text-white mx-2 my-4 rounded-lg max-w-full md:max-w-lg mb-20">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Frame Work
            </h1>
            <p className="mt-4 text-start text-sm md:text-base">
              React.js Next.js
            </p>
          </div>
          <div className="bg-gray-800 py-5 px-4 text-white mx-2 my-4 rounded-lg max-w-full md:max-w-lg mb-20">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Css Frame Work
            </h1>
            <p className="mt-4 text-start text-sm md:text-base">
              Tailwind Bootstrap
            </p>
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
