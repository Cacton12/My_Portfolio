"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "My Education", href: "#education" },
  { name: "My Experience", href: "#experience" },
  { name: "Tech Skills", href: "#skills" },
  { name: "Contact Me", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
  className={`fixed w-full z-50 transition-all duration-300 ${
    isOpen
      ? "bg-black py-2 shadow-md"
      : isScrolled
      ? "bg-black/90 backdrop-blur-md shadow-md py-2"
      : "bg-transparent py-4"
  }`}
>
      <div className="container mx-auto px-4 flex justify-between items-center text-white">
        {/* Logo */}
        <Link href="#home">
          <motion.div
            className="text-2xl font-bold cursor-pointer hover:text-blue-500 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Colby Acton
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 ">
          {navLinks.map((link) => (
            <motion.li 
              key={link.name}
              whileHover={{ scale: 1.1, color: "#3B82F6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={link.href} className="hover:text-blue-500 text-white">
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-950 overflow-hidden"
          >
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-gray-950 text-white">
                <Link href={link.href} passHref>
                  <motion.a
                    className="block px-4 py-3 hover:bg-blue-500"
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
