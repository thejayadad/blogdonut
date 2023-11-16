
'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiMail } from 'react-icons/fi'; // Import the necessary icons
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-32 z-50 fixed top-0 w-full bg-transparent text-white px-6 grid grid-cols-3">
      <div className="flex items-center mx-auto">
        <button onClick={toggleMenu} className="text-white text-5xl z-[100]">
          {isMenuOpen ? 'X' : <FiMenu />}
        </button>
      </div>
      <div className="flex items-center justify-center">
        <Link className="text-white uppercase font-bold text-2xl tracking-widget" href={'/'}>
          DONUTWORLD
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Link
          className="text-white uppercase font-bold text-2xl tracking-widget"
          href={'/'}
        >
          <FiMail className='text-5xl' />
        </Link>
      </div>

      {/* Full-screen menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white text-gray-500 p-8 space-y-4 w-[400px] text-center">
              <div>
              <Link className='mr-6' href="/">Home</Link>
                <Link className='mr-6'  href="/blog">Blog</Link>
                <Link className='mr-6'  href="/about">About</Link>
                <Link className='mr-6'  href="/contact">Contact</Link>
              </div>
              <div>
                Auth
              </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
