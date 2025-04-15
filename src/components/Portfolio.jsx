import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGitlab, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importar los íconos
import aleixImage from '../assets/aleix.png'; // Asegúrate de que la ruta sea correcta
import ProjectCard from './ProjectCard'; // Importar el componente de tarjeta de proyecto


const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Datos de los proyectos
  const projects = [
    {
      name: 'The Library of Babel',
      year: 2024,
      teamSize: 4,
      duration: '6 Years',
      tool: 'Unity3D (C#)',
      description: 'The library of Babel is a tale revolving around a dark futuristic world, unfolding through platformer elements.',
      videoId: 'Dw97lkxlWyU',
      website: 'https://tanukigamestudio.com/our-games/the-library-of-babel'
    },
    {
      name: 'Kluest',
      year: 2024,
      teamSize: 14,
      duration: '3 Years',
      tool: 'Unity3D (C#)',
      description: 'Kluest is a mobile AR Metaverse where anyone can create experiences without thechnical knowledge.',
      videoId: 'DyAsX5BNrBw',
      website: 'https://kluest.com'
    },
    {
      name: 'Maze3D',
      year: 2025,
      teamSize: 1,
      duration: '3 Weeks',
      tool: 'Raylib (C++)',
      description: 'This is a maze 3D game, made with the graphic library Raylib, shaders and modern C++.',
      videoId: 'tSi3oM71Zi8',
      website: 'https://acots96.itch.io/maze3d'
    },
    {
      name: 'Pacman',
      year: 2025,
      teamSize: 1,
      duration: '4 Days',
      tool: 'Raylib (C++)',
      description: 'This is a mini version of the Pacman game, made with the graphic library Raylib and modern C++.',
      videoId: 'T9nZaKyVOsg',
      website: 'https://acots96.itch.io/pacman'
    },
    {
      name: 'Paratrooper',
      year: 2025,
      teamSize: 1,
      duration: '2 Days',
      tool: 'Raylib (C++)',
      description: 'This is a replica of the paratrooper game, made with the graphic library Raylib and modern C++.',
      videoId: 'Qe5JD7qyNG4',
      website: 'https://acots96.itch.io/paratrooper'
    },
    {
      name: 'CityZombies',
      year: 2021,
      teamSize: 1,
      duration: '6 Months',
      tool: 'Unity3D (C#)',
      description: 'Use vehicles and fire weapons (or something else hidden in the map) to kill as many zombies as you can.',
      videoId: 'gFnH9yPQsss',
      website: 'https://acots96.itch.io/cityzombies'
    },
  ];

  useEffect(() => {
    // Desactivar el scroll
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setScrollEnabled(true);
      document.body.style.overflow = 'auto'; // Activar el scroll
    }, 1000);

    return () => clearTimeout(timer); // Limpiar el timer al desmontar
  }, []);

  return (
    <div className={`relative min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition duration-500`}>
      {/* Contenedor centrado para el contenido con margen superior */}
      <motion.div
        className="flex flex-col items-center mb-8 mt-20" // Añadir mt-20 para margen superior
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className={`relative w-40 h-40 rounded-full overflow-hidden cursor-pointer ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition duration-500`}
          onClick={toggleDarkMode}
        >
          <img src={aleixImage} alt="Aleix Cots" className="object-cover w-full h-full" />
        </motion.div>
        <h1 className="text-3xl font-bold mt-4">Aleix Cots Molina</h1>
        <h2 className="text-xl font-semibold mt-2">Videogame Developer</h2>

        {/* Íconos clicables */}
        <div className="flex space-x-4 mt-4">
          <a href="https://gitlab.com/Acots96" target="_blank" rel="noopener noreferrer">
            <FaGitlab className="text-2xl transition duration-500 hover:text-orange-500" /> {/* Color de GitLab: Naranja */}
          </a>
          <a href="https://github.com/Acots96" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl transition duration-500 hover:text-purple-600" /> {/* Color de GitHub: Morado */}
          </a>
          <a href="https://www.linkedin.com/in/aleix-cots-molina-8bb00a153" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl transition duration-500 hover:text-blue-600" /> {/* Color de LinkedIn */}
          </a>
          <a href="mailto:acots96@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-2xl transition duration-500 hover:text-gray-500" /> {/* Color de Email: Gris */}
          </a>
        </div>

        <a
          href="https://drive.google.com/file/d/1rUcFg_f2DDWhUNTrpSz-E-wCONB9aNs6/view?usp=sharing" // Reemplaza esto con la URL de tu currículum
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 px-6 py-2 transition duration-500 
            ${darkMode ? 'bg-white text-gray-900 hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
        >
          Resume
        </a>
      </motion.div>

      {/* Sección de Proyectos */}
      {scrollEnabled && (
        <motion.div
          className="flex flex-wrap justify-center" // Usar grid para limitar a 3 columnas
          initial={{ opacity: 0, y: 50 }} // Comienza desde abajo
          animate={{ opacity: 1, y: 0 }} // Termina en su posición final
          transition={{ duration: 0.5 }} // Duración de la animación
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} darkMode={darkMode} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;
