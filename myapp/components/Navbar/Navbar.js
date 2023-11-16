'use client'
import React from 'react';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'Founder', image: '/john-doe.jpg' },
    { name: 'Jane Smith', role: 'Head Baker', image: '/jane-smith.jpg' },
    { name: 'Bob Johnson', role: 'Marketing Director', image: '/bob-johnson.jpg' },
  ];

  return (
    <section className="container mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          At DonutWorld, we are on a mission to create moments of joy through the art of crafting delicious donuts. We strive to bring smiles to our customers' faces, one donut at a time.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUsPage;
