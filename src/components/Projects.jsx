import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const Projects = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>My Portfolio</i>', '<i>Memory Locker</i>', '<i>Tasker</i>', '<i>Blog Template</i>', '<i>Minlinks</i>' , '<i>Spotify</i>'],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Project Data Array
  const projects = [
    {
      title: 'Memory Locker',
      description: 'A secure app to safely store and organize your cherished memories, notes, and photos with ease.',
      image: 'project1.png',
      githubLink: 'https://github.com/Sardar-Khurram/Pass-OP-Local',
      demoLink: 'https://memory-locker-sardar-khurrams-projects.vercel.app/',
    },
    {
      title: 'Tasker',
      description: 'A simple and efficient app to organize, track, and manage your tasks, boosting productivity with ease.',
      image: 'project2.png',
      githubLink: 'https://github.com/Sardar-Khurram/Project-1-Todolist-App-Using-React-Tailwindcss-and-React-Icons',
      demoLink: 'https://todo-app-sardar-khurrams-projects.vercel.app/',
    },
    {
      title: 'Blog Template',
      description: 'A customizable blog template designed for content creators to showcase their articles seamlessly.',
      image: 'project3.png',
      githubLink: 'https://github.com/Sardar-Khurram/First-Blog',
      demoLink: 'https://blog-template-sardar-khurrams-projects.vercel.app/',
    },
    {
      title: 'Minlinks',
      description: 'A sleek and minimalist portfolio showcasing professional skills and projects, designed for easy navigation and visual appeal.',
      image: 'project5.png',
      githubLink: 'https://github.com/Sardar-Khurram/Project-1-Todolist-App-Using-React-Tailwindcss-and-React-Icons',
      demoLink: 'https://min-links.vercel.app/',
    },
    {
      title: 'Portfolio',
      description: 'A Personal portfolio designed especially to showcase all of my projects.',
      image: 'project4.png',
      githubLink: 'https://github.com/Sardar-Khurram/Personal-Portfolio',
      demoLink: 'https://personal-portfolio-delta-eosin-92.vercel.app/',
    },
    {
      title: 'Spotify-Clone',
      description: 'A responsive music streaming web app replicating Spotifys core features with a user-friendly interface.',
      image: 'project6.png',
      githubLink: 'https://github.com/Sardar-Khurram/First-Blog',
      demoLink: 'https://blog-template-sardar-khurrams-projects.vercel.app/',
    },
  ];

  return (
    <div className="min-h-screen  text-gray-800 dark:text-gray-200 bg-gradient-to-b from-green-100 via-white to-green-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-10">
      {/* Introduction */}
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 dark:text-gray-200">
          Explore My Projects
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Each project reflects my dedication to innovation, showcasing the skills I’ve mastered and the meaningful solutions I’ve created along the way.
        </p>
        <div className="mt-6">
          <span
            className="text-3xl font-bold text-blue-500 hover:text-blue-600 dark:text-blue-700 dark:hover:text-blue-800"
            ref={el}
          ></span>
        </div>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105 flex flex-col items-center p-5"
          >
            {/* Image */}
            <div className="w-full h-48 mb-4">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={project.image}
                alt={`${project.title} Screenshot`}
                aria-label={`${project.title} Screenshot`}
              />
            </div>
            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{project.title}</h3>
            {/* Description */}
            <p className="mt-4 text-gray-500 dark:text-gray-300 text-center">{project.description}</p>
            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-md font-semibold transition"
              >
                GitHub
              </a>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-md font-semibold transition"
              >
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
