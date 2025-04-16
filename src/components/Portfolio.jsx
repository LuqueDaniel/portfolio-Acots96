import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGitlab, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'; // Importar los íconos
import aleixImage from '../assets/aleix.png'; // Asegúrate de que la ruta sea correcta
import ProjectCard from './ProjectCard'; // Importar el componente de tarjeta de proyecto
import { projects, underDevelopmentProjects } from '../data/projectsData';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };



  useEffect(() => {
    // Desactivar el scroll
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setScrollEnabled(true);
      document.body.style.overflow = 'auto'; // Activar el scroll
    }, 1000);

    // Aplicar clase de modo oscuro al body
    if (darkMode) {
      document.body.classList.add('bg-gray-900', 'text-white');
    } else {
      document.body.classList.remove('bg-gray-900', 'text-white');
    }

    return () => clearTimeout(timer); // Limpiar el timer al desmontar
  }, [darkMode]);

  return (
    <div className={`relative min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition duration-500`}>
      {/* Contenedor centrado para el contenido con margen superior */}
      <motion.div
        className={`flex flex-col items-center mb-8 mt-20 px-4 max-w-4xl mx-auto`} // Añadir max-w y centrar
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
        <h2 className="text-xl font-semibold mt-2">Game Programmer</h2>

        {/* Información personal en un contenedor */}
        <div className={`p-4 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'} text-center`}>
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
        </div>

        {/* Íconos clicables */}
        <div className="flex space-x-4 mt-4">
          <a href="https://gitlab.com/Acots96" target="_blank" rel="noopener noreferrer">
            <FaGitlab className="text-2xl transition duration-500 hover:text-orange-500" />
          </a>
          <a href="https://github.com/Acots96" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl transition duration-500 hover:text-purple-600" />
          </a>
          <a href="https://www.linkedin.com/in/aleix-cots-molina-8bb00a153" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl transition duration-500 hover:text-blue-600" />
          </a>
          <a href="mailto:acots96@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-2xl transition duration-500 hover:text-gray-500" />
          </a>
        </div>

        <a
          href="https://drive.google.com/file/d/1B83HPk9Cl2jqIxb_E19V75EqK3q3FGXF/view?usp=sharing" // Reemplaza esto con la URL de tu currículum
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 flex items-center justify-center px-6 py-2 transition duration-500
            ${darkMode ? 'bg-white text-gray-900 hover:bg-gray-200 border border-gray-300' : 'bg-black text-white hover:bg-gray-800 border border-gray-600'}`}
        >
          <FaFileAlt className="mr-2" />
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

          {/* Barra de separación y nueva sección "Under Development" */}
          <div className="my-8">
            <hr className={`border-t-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`} />
            <h2 className="text-2xl font-bold text-center mt-4">Under Development</h2>
            <motion.div
              className="flex flex-wrap justify-center mt-4"
              initial={{ opacity: 0, y: 50 }} // Comienza desde abajo
              animate={{ opacity: 1, y: 0 }} // Termina en su posición final
              transition={{ duration: 0.5 }} // Duración de la animación
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
