"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavbarComponent() {
  // menubar in small screen 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-6 md:px-20 py-3 bg-white relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://i.postimg.cc/43LNRk2L/copped-logo.png"
          alt="Logo"
          className="h-16 w-auto"
        />
      </div>

      {/* Center Nav Links - only show on desktop */}
      <nav className=" hidden sm:flex gap-8 text-gray-800 font-semibold text-lg">
        <Link href="/" className=" relative after:content-[''] after:absolute after:left-0  after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full hover:text-gray-900">
          Home
        </Link>
        <Link href="/exploreContent" className=" relative after:content-[''] after:absolute after:left-0  after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full hover:text-gray-900">
          Resources
        </Link>
        <Link href="/newsAndUpdates" className="relative after:content-[''] after:absolute after:left-0  after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full hover:text-gray-900">
          News
        </Link>
      </nav>

      {/* Right Side Actions */}
      <div className="hidden md:flex items-center gap-4">
        <Link href="#" className="text-gray-700 hover:text-blue-600">
          Login
        </Link>
        <Link
          href="#"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </Link>
      </div>

      {/* Hamburger button (mobile only) */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full flex flex-col items-start gap-4 bg-white px-6 py-4 text-gray-700 font-semibold text-lg sm:hidden shadow-md">
          <Link href="#" className="hover:text-blue-600">
            Features
          </Link>
          <Link href="#" className="hover:text-blue-600">
            Customers
          </Link>
          <Link href="#" className="hover:text-blue-600">
            Integrations
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600">
            Login
          </Link>
          <Link
            href="#"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </nav>
      )}
    </header>
  );
}
