import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGitlab, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import aleixImage from '../assets/aleix.png';
import ProjectCard from './ProjectCard';
import { projects, underDevelopmentProjects } from '../data/projectsData';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setScrollEnabled(true);
      document.body.style.overflow = 'auto';
    }, 1000);

    document.body.classList.add('bg-gray-900', 'text-white');

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition duration-500`}>
      <motion.div
        className="flex flex-col items-center mb-8 mt-20 px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.9, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center">
          <motion.div
            className={`relative w-40 h-40 rounded-full overflow-hidden bg-gray-800 shadow-lg transition duration-500`}
          >
            <img src={aleixImage} alt="Aleix Cots" className="object-cover w-full h-full" />
          </motion.div>
          <motion.div
            className="flex flex-col items-start ml-8"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center mb-2">
              <a href="https://gitlab.com/Acots96" target="_blank" rel="noopener noreferrer">
                <FaGitlab className="text-2xl transition duration-500 hover:text-orange-500" />
              </a>
              <span className="ml-2">GitLab</span>
            </div>
            <div className="flex items-center mb-2">
              <a href="https://github.com/Acots96" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl transition duration-500 hover:text-purple-600" />
              </a>
              <span className="ml-2">GitHub</span>
            </div>
            <div className="flex items-center mb-2">
              <a href="https://www.linkedin.com/in/aleix-cots-molina-8bb00a153" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl transition duration-500 hover:text-blue-600" />
              </a>
              <span className="ml-2">LinkedIn</span>
            </div>
            <div className="flex items-center mb-2">
              <a href="mailto:acots96@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="text-2xl transition duration-500 hover:text-gray-500" />
              </a>
              <span className="ml-2">Email</span>
            </div>
            <div className="flex items-center mb-2">
              <a href="https://drive.google.com/file/d/1B83HPk9Cl2jqIxb_E19V75EqK3q3FGXF/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FaFileAlt className="text-2xl transition duration-500 hover:text-gray-500" />
              </a>
              <span className="ml-2">Resume</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h1 className="text-3xl font-bold mt-4 text-center">Aleix Cots Molina</h1>
          <h2 className="text-xl font-semibold mt-2 text-center">Game Programmer</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-4 p-4 rounded bg-gray-700 text-white text-center"
          onAnimationComplete={() => setShowProjects(true)}
        >
          <p className="mb-6 text-lg">
            Hi! I am <strong>Aleix</strong>, a game programmer from <strong>Barcelona, Spain</strong>, focused on <strong>gameplay, systems</strong>, and making games feel amazing to play.
            Mainly working with <strong>Unreal Engine</strong> and <strong>C++</strong>, and always looking for ways to push mechanics, feedback, and fun.
          </p>
          <p className="mb-6 text-lg">
            Currently being part of <a href="https://creekgames.com" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline"><strong>CreekGames</strong></a> as an <strong>Unreal dev</strong> and working as a <strong>Raylib/C++ teacher</strong> in a videogames programming degree (<a href="https://citm.upc.edu" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline"><strong>CITM – UPC</strong></a>).
          </p>
          <p className="text-lg">
            Feel free to contact me for anything you want!
          </p>
        </motion.div>
      </motion.div>

      {scrollEnabled && showProjects && (
        <motion.div
          className="flex flex-wrap justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} darkMode={darkMode} />
          ))}

          <div className="my-8">
            <hr className="border-t-2 border-gray-300" />
            <h2 className="text-2xl font-bold text-center mt-4">Under Development</h2>
            <motion.div
              className="flex flex-wrap justify-center mt-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {underDevelopmentProjects.map((project, index) => (
                <ProjectCard key={index} project={project} darkMode={darkMode} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;
