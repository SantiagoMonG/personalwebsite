"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white">
      {/* Desktop Navbar */}
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <p className="text-xl font-bold tracking-wide cursor-pointer">Santiago Monroy</p>
        </Link>
        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/resume" className="hover:underline">Resume</Link>
          <Link href="/projects" className="hover:underline">Slides, Charts & Projects</Link>
          <Link href="https://substack.com/@samongom" target="_blank" className="hover:underline">Substack</Link>
        </div>
        {/* Hamburger Button for Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none"
        >
          <Image src="/icons/menu.svg" alt="Menu" width={30} height={30} />
        </button>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white text-center py-4">
          <Link href="/about" className="block py-2 hover:bg-gray-800">About</Link>
          <Link href="/resume" className="block py-2 hover:bg-gray-800">Resume</Link>
          <Link href="/projects" className="block py-2 hover:bg-gray-800">Slides, Charts & Projects</Link>
          <Link href="https://substack.com/@samongom" target="_blank" className="block py-2 hover:bg-gray-800">Substack</Link>
        </div>
      )}
    </nav>
  );
}