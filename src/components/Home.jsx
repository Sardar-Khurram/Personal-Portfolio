import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen text-gray-800 dark:text-gray-200 bg-gradient-to-b from-green-100 via-white to-green-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold md:text-5xl">
            Hi, I&apos;m <span className="">Sardar Khurram</span>
          </h1>
          <p className="mt-4 text-lg md:px-40">
            I am a passionate developer dedicated to crafting beautiful, functional,
            and scalable web applications. With expertise in modern technologies like
            React and Next.js, I aim to deliver seamless user experiences and solutions
            tailored to solve real-world challenges.
          </p>
        </motion.div>
      </section>


      {/* About Section */}
<section className="container mx-auto px-4 py-16 bg-gradient-to-b from-green-100 via-white to-green-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-lg shadow-md">
  <h2 className="text-3xl font-bold text-center">About Me</h2>
  <p className="mt-4 text-center text-lg">
    I&apos;m a developer who loves solving real-world problems and building
    user-friendly applications.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
    <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition-transform duration-300 hover:shadow-xl hover:scale-105">
      {/* Animated background layer */}
      <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
      <h3 className="text-xl font-bold">Education</h3>
      <p className="mt-2">
        I am currently pursuing a degree in Software Engineering at the University of Azad Jammu and Kashmir.
      </p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition-transform duration-300 hover:shadow-xl hover:scale-105">
      <h3 className="text-xl font-bold">Interests</h3>
      <p className="mt-2">
        I enjoy learning about modern technologies and improving my skills in software/web development.
      </p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition-transform duration-300 hover:shadow-xl hover:scale-105">
      <h3 className="text-xl font-bold">Hobbies</h3>
      <p className="mt-2">
        Experimenting with coding projects and exploring new technologies.
      </p>
    </div>
  </div>
  <div className="text-center mt-8">
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
    >
      <Link to="/about">Learn More About Me</Link>
    </motion.button>
  </div>
</section>


      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16 text-gray-800 dark:text-gray-200 bg-gradient-to-b from-green-100 via-white to-green-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <h2 className="text-3xl font-bold text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Flowbite",
            "ShadCN UI",
            "Tailwind CSS",
            "React",
            "Next.js",
            "Node.js (Basics)",
            "Express.js (Basics)",
            "MongoDB (Basics)",
          ].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="p-6 rounded-lg shadow-lg text-center dark:bg-gray-800"
            >
              <p className="text-lg font-semibold">{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
<section className="container mx-auto px-4 py-16 bg-gradient-to-b from-green-100 via-white to-green-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-lg shadow-md">
  <h2 className="text-3xl font-bold text-center">My Projects</h2>
  <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
    <motion.div
      className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition-transform duration-300 hover:shadow-xl hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold">Memory Locker</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        A secure and easy-to-use password manager app for storing your credentials safely.
      </p>
    </motion.div>

    <motion.div
      className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition-transform duration-300 hover:shadow-xl hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold">Tasker</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        An efficient task management app to keep track of your daily tasks and productivity.
      </p>
    </motion.div>

    <motion.div
      className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition-transform duration-300 hover:shadow-xl hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold">Minlinks</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        A URL shortener app that allows you to create shortened links easily.
      </p>
    </motion.div>

    <motion.div
      className="mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition-transform duration-300 hover:shadow-xl hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold">Clones</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        I've built several clones of popular applications to enhance my skills and knowledge.
      </p>
    </motion.div>
  </div>
  <div className="text-center mt-8">
  <motion.button
      whileHover={{ scale: 1.1 }}
      className="mt-2 px-16 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
    >
      <Link to="/projects">Projects</Link>
    </motion.button>
  </div>
</section>





      {/* Contact Section */}
<section className="container mx-auto px-4 py-16 bg-gradient-to-b from-green-100 via-white to-green-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-lg shadow-md">
  <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
  <p className="mt-4 text-center text-lg">
    Interested in collaborating or have a question? Let&apos;s connect!
  </p>
  <div className="text-center mt-8">
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="mt-2 px-16 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
    >
      <Link to="/contact">Contact</Link>
    </motion.button>
  </div>
</section>

    </main>
  );
};

export default Home;
