'use client'
import React, { useState } from 'react';
import { FiMenu, FiMail } from 'react-icons/fi'; // Import the necessary icons
import { Transition } from '@headlessui/react';
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
      <Transition
        show={isMenuOpen}
        enter="transition-opacity ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white text-gray-900 p-8 space-y-4">
              <Link href="/">Home</Link>
              <Link href="/">Home</Link>
              <Link href="/">Home</Link>
            </div>
          </div>
        </div>
      </Transition>
    </header>
  );
};

export default Navbar;
