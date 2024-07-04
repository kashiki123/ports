"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "components/ui/carousel";

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
            <a href="/" className="text-white hover:text-amber-300">
              Home
            </a>
            <a href="/about/" className="text-white hover:text-amber-300">
              About
            </a>
            <a href="/skill/" className="text-white hover:text-amber-300">
              Skills
            </a>
            <a href="#" className="text-amber-300 hover:text-green-300">
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
              <a href="/" className="block text-white hover:text-amber-300">
                Home
              </a>
              <a
                href="/about/"
                className="block text-white hover:text-amber-300"
              >
                About
              </a>
              <a
                href="/skill/"
                className="block text-white hover:text-amber-300"
              >
                Skills
              </a>
              <a href="#" className="block text-amber-300 hover:text-green-300">
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
        <div className="absolute inset-0 flex items-center justify-center mb-20">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="flex justify-center items-center flex-col">
                  <Image
                    src="/assets/images/project.jpg"
                    width={150}
                    height={100}
                    alt="Image 1"
                  />
                  <h1 className="text-center mt-2 font-bold">
                    Math For Kids Mobile App
                  </h1>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex justify-center items-center flex-col">
                  <Image
                    src="/assets/images/capstone.png"
                    width={550}
                    height={550}
                    alt="Image 2"
                  />
                  <h1 className="text-center mt-2 font-bold">
                    Capstone Project
                  </h1>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex justify-center items-center flex-col">
                  <Image
                    src="/assets/images/toolsapp.png"
                    width={550}
                    height={550}
                    alt="Image 2"
                  />
                  <h1 className="text-center mt-2 font-bold">
                    Web App borrowing Tool
                  </h1>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
