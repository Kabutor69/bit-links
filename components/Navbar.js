'use client'

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to check active link
  const isActive = (path) => pathname === path ? 'text-purple-200' : 'text-white';

  return (
    <nav className="bg-gradient-to-r from-purple-800 to-purple-600 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-2xl flex items-center gap-2 hover:text-purple-200 transition">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
          BitLinks
        </Link>

        {/* Desktop Navigation Links pcccccc */}
        <ul className="hidden md:flex gap-6 items-center text-white font-medium">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Features", "/features"],
            ["Pricing", "/pricing"],
            ["Contact", "/contact"]
          ].map(([label, href]) => (
            <li key={label}>
              <Link href={href} className={'hover:text-purple-200 transition-colors duration-200 ${isActive(href)}'}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            {/* Main button */}
            <Link
              href="/shorten"
              className="bg-white text-purple-700 hover:bg-purple-100 px-4 py-2 rounded-md font-semibold transition-colors duration-200"
            >
              Try Now
            </Link>
          </li>

          {/* GitHub lol Icon */}
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"
                />
              </svg>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button phun */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 5h18a1 1 0 110 2H3a1 1 0 110-2zm0 6h18a1 1 0 110 2H3a1 1 0 110-2zm0 6h18a1 1 0 110 2H3a1 1 0 110-2z"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu ezzzz */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-800 to-purple-600 text-white p-6">
          <ul className="space-y-4">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Features", "/features"],
              ["Pricing", "/pricing"],
              ["Contact", "/contact"]
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className={'block ${isActive(href)} py-2 px-4 hover:text-purple-200'}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {label}
                </Link>
              </li>
            ))}
            {/* Main button */}
            <li>
              <Link
                href="/shorten"
                className="block text-center bg-white text-purple-700 py-2 rounded-md font-semibold transition-colors"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Try Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
