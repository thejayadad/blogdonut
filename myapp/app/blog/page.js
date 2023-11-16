'use client'
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import React from 'react';

const BlogPage = () => {
  return (
    <section className='relative'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }} // Added a slight delay to create a staggered effect
        className='text-center py-12 px-6 mt-12'
      >
        <motion.h1
          className='font-display font-bold text-5xl mb-6'
        >
          Donut Memories
        </motion.h1>
        <motion.p
          className='max-w-lg mx-auto'
        >
          The place where tasty memories are shared and kept forever. Sit back and read about some of our most memorable tasty treats.
        </motion.p>
      </motion.div>
      <div className='container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 pb-24'>
        {/* Wrap each card in motion.div */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }} // Adjust the delay for staggered effect
        >
          <Link className='' href={'/blog'}>
            <motion.img
              className='w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover'
              src='https://images.pexels.com/photos/6940977/pexels-photo-6940977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            />
          </Link>
          <motion.div
            className='bg-gray-50 p-8'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className='text-xs text-gray-600 uppercase font-semibold'>
              <span className='text-xs text-gray-600 uppercase font-semibold'>11/16/2023</span>
              <motion.h2
                className='mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm'
              >
                Donut Blog Title
              </motion.h2>
              <motion.p
                className='mt-4 max-w-md'
              >
                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
              </motion.p>
              <Link className='flex items-center mt-6 uppercase text-sm text-black font-semibold' href={'/blog'}>
                Read Blog
              </Link>
            </div>
          </motion.div>
        </motion.div>
        {/* Repeat the same animation logic for the second card */}
        {/* ... */}
      </div>
    </section>
  );
};

export default BlogPage;
