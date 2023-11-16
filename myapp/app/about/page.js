'use client'
import React from 'react';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'Founder', image: 'https://images.pexels.com/photos/5989858/pexels-photo-5989858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Jane Smith', role: 'Head Baker', image: 'https://images.pexels.com/photos/5989858/pexels-photo-5989858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Bob Johnson', role: 'Marketing Director', image: 'https://images.pexels.com/photos/5989858/pexels-photo-5989858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  ];

  return (
    <section className="container mx-auto p-8 h-screen mt-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="font-display text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          Welcome to DonutWorld, where passion meets pastry. Discover the story behind our delightful creations.
        </p>
      </motion.div>

      {/* Team Members Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Mission Statement Section */}
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
