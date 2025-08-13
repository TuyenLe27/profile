"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  // Toggle menu hamburger
  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation cho menu mobile
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800/80 backdrop-blur-md text-white px-4 sm:px-8 py-4 shadow-lg border-b border-gray-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-teal-400 tracking-wide">
          MyPortfolio
        </Link>

        {/* Nút hamburger trên mobile */}
        <motion.button
          className="sm:hidden text-2xl text-teal-400 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Đóng menu" : "Mở menu"}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>

        {/* Links trên desktop */}
        <div className="hidden sm:flex gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2 py-1 transition-colors duration-200 ${
                  isActive ? "text-teal-400" : "hover:text-teal-300"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-400 rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Menu mobile (dropdown) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden mt-2 bg-gray-800 border-t border-gray-700 max-h-48 overflow-y-auto"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col gap-2 py-2">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-1 text-base text-center transition-colors duration-200 ${
                      isActive ? "text-teal-400" : "hover:text-teal-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}