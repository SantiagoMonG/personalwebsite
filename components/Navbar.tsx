"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-4 flex justify-between items-center shadow-md z-10 font-sans">
      {/* Logo/Icon */}
      <div className="flex items-center space-x-2">
        <Image
          src="/icons/rocket.svg"
          alt="Rocket Icon"
          width={60}
          height={60}
        />
      </div>

      {/* Navigation Links with Styled Buttons */}
      <div className="space-x-6 flex">
        <Link href="/resume">
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 rounded-md font-montserrat font-semibold text-black hover:scale-105 transition-transform">
            Resume
          </button>
        </Link>

        {/* Light/Dark Mode Toggle with Custom Icons */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-transform hover:scale-110"
        >
          {mounted && theme === "dark" ? (
            <Image src="/icons/sun2.svg" alt="Light Mode" width={30} height={30} />
          ) : (
            <Image src="/icons/moon.svg" alt="Dark Mode" width={30} height={30} />
          )}
        </button>
      </div>
    </nav>
  );
}