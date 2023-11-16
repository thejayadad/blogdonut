'use client'
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

const HeroSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateOnMount = async () => {
      await controls.start({ opacity: 1, transition: { ease: 'easeInOut', duration: 1 } });
    };

    animateOnMount();
  }, [controls]);

  return (
    <div
      className="relative h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/179907/pexels-photo-179907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      {/* Hero Content */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={controls}
      >
      <div className='mt-24 relative w-full py-12 px-12'>
      <div className='relative z-10 text-center py-24 md:py-48'>
        <h1 
        className='text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-12'
        >Donut World For The True Lovers</h1>
        <Link 
        className='inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4'
        href={'/'}>Read More</Link>
      </div>
      <div className='relative z-10 mx-auto max-w-4xl flex justify-between uppercase text-white font-heading tracking-widest text-sm'>
        <Link className='border-b border-white' href={'/about'}>Find Out More</Link>
        <Link className='border-b border-white' href={'/contact'}>Get In Touch</Link>
      </div>
      </div>
      </motion.div>

      <div
        className="absolute inset-0 bg-black bg-opacity-30"
        initial={{ opacity: 0 }}
        animate={controls}
      ></div>
    </div>
  );
};

export default HeroSection;
