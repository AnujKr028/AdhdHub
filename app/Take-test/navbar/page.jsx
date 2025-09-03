"use client";

import Link from "next/link";

export default function NavbarComponent() {
  return (
    <header className="w-full flex items-center justify-between px-20     py-3  bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://i.postimg.cc/43LNRk2L/copped-logo.png"
          alt="Logo"
          className="h-20 w-auto"
        />
      
      </div>

      {/* Center Nav Links */}
      <nav className="hidden sm:flex gap-8 text-gray-700 font-semibold text-lg  ">
        <Link href="#" className="hover:text-blue-600">
          Features
        </Link>
        <Link href="#" className="hover:text-blue-600">
          Customers
        </Link>
        <Link href="#" className="hover:text-blue-600">
          Integrations
        </Link>
      </nav>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        <Link href="#" className="hidden lg:block text-gray-700 hover:text-blue-600">
          Login
        </Link>
        <Link
          href="#"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}
