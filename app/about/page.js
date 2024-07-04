"use client";

import React, { useState } from "react";
import Image from "next/image";

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
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
              <span className="text-2xl font-semibold font-kashiki">
                Kashiki
              </span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-white hover:text-amber-300">
                Home
              </a>
              <a href="/about/" className="text-amber-300 hover:text-green-300">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 md:hidden">
            <div className="bg-sky-950 p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-white">Menu</h2>
                <button
                  className="text-white focus:outline-none"
                  onClick={toggleMenu}
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <nav className="mt-4 space-y-2">
                <a href="/" className="block text-white hover:text-amber-300">
                  Home
                </a>
                <a
                  href="/about/"
                  className="block text-amber-300 hover:text-green-300"
                >
                  About
                </a>
                <a
                  href="/skill/"
                  className="block text-white hover:text-amber-300"
                >
                  Skills
                </a>
                <a
                  href="/project/"
                  className="block text-white hover:text-amber-300"
                >
                  Projects
                </a>
                <a
                  href="/contact/"
                  className="block text-white hover:text-amber-300"
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
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-evenly top-0 p-4 z-10">
            <Image
              src={"/assets/images/prof.jpg"}
              width={350}
              height={150}
              className="rounded-lg"
              alt="Joemari"
            />
            <div>
              <div className="flex justify-evenly">
                <div className="bg-gray-800 py-5 px-4 text-white mx-2 my-4 rounded-lg max-w-full md:max-w-lg">
                  <h1 className="text-3xl md:text-4xl font-bold text-center">
                    About Me
                  </h1>
                  <p className="mt-4 text-center text-sm md:text-base">
                    Hi, I'm Joemari Obrial. As a dedicated Network Engineer, I
                    specialize in designing, implementing, and maintaining
                    robust network infrastructures that support organizational
                    goals and enhance connectivity. With a solid foundation in
                    networking principles and hands-on experience with
                    cutting-edge technologies, I am committed to ensuring
                    optimal network performance and security.
                  </p>
                </div>
                <div className="bg-gray-800 py-5 px-4 text-white mx-2 my-4 rounded-lg max-w-full md:max-w-lg">
                  <h1 className="text-3xl md:text-4xl font-bold text-center">
                    Achievements
                  </h1>
                  <p className="mt-4 text-center text-sm md:text-base">
                    Successful Completion of Major Network Upgrade: Spearheaded
                    a critical network upgrade project that was completed on
                    time and under budget, enhancing overall network performance
                    and reliability. <br></br>Developed In-House Network
                    Security Training Program: Created and implemented a
                    training program for IT staff, significantly improving the
                    team’s ability to manage and secure the network.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="bg-gray-800 py-5 px-4 text-white mx-2 my-4 rounded-lg max-w-full md:max-w-lg">
                  <h1 className="text-3xl md:text-4xl font-bold text-center">
                    Professional Background
                  </h1>
                  <p className="mt-4 text-center text-sm md:text-base">
                    I hold a degree in Bachelor of Science in Information
                    Technology from Cagayan De Oro College. I have honed my
                    skills in various aspects of network engineering.
                  </p>
                </div>
                <div className="bg-gray-800 py-5 px-4 text-white mx-2 my-4 rounded-lg max-w-full md:max-w-lg">
                  <h1 className="text-3xl md:text-4xl font-bold text-center">
                    Experience
                  </h1>
                  <p className="mt-4 text-center text-sm md:text-base">
                    1 year in network engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-2 mt-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Joemari Obrial. All rights
            reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default Page;
