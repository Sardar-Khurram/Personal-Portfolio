import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-16 flex flex-col justify-center items-center min-h-screen text-gray-800 dark:text-gray-200 bg-gradient-to-b from-green-100 via-white to-green-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Page Heading */}
      <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-center">
        About Me
      </h1>
      <p className="text-lg mb-10 text-center px-4 max-w-3xl leading-relaxed">
        Welcome! I am dedicated to providing top-notch solutions and always eager to collaborate. My goal is to create meaningful work that helps clients achieve their objectives with excellence and integrity.
      </p>

      {/* Animated Profile Section */}
      <div className="relative w-52 h-52 mb-12">
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-dashed border-green-500 dark:border-green-300 animate-spin-slow"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="w-full h-full rounded-full overflow-hidden shadow-lg"
          whileHover={{ scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 150 }}
        >
          <img
            src={'/self.jpeg'}
            alt="Profile photo"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="w-full max-w-3xl p-10 bg-gradient-to-r from-green-200 via-white to-green-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-lg shadow-2xl mb-16 hover:scale-105 transform transition-transform duration-300 ">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-900 dark:text-gray-100">
          My Mission
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-center">
          My mission is to transform ideas into impactful solutions with
          creativity, innovation, and commitment to quality. I strive to make a
          positive difference through my work.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {[
          {
            icon: 'handshake',
            color: 'text-green-500 dark:text-green-400',
            title: 'Client-Focused',
            description:
              'I prioritize building trust and transparency with my clients to deliver excellent results.',
          },
          {
            icon: 'lightbulb',
            color: 'text-yellow-500 dark:text-yellow-400',
            title: 'Innovation-Driven',
            description:
              'Innovation is at the heart of my work, always looking to push boundaries and improve.',
          },
          {
            icon: 'users',
            color: 'text-blue-500 dark:text-blue-400',
            title: 'Team-Oriented',
            description:
              'I collaborate effectively, ensuring each project is handled with expertise and dedication.',
          },
        ].map((value, index) => (
          <motion.div
            key={index}
            className="text-center p-8 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg transform transition-transform duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
            }}
          >
            <i
              className={`fas fa-${value.icon} text-4xl ${value.color} mb-4`}
            ></i>
            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
