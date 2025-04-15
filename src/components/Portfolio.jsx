import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGitlab, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importar los íconos
import aleixImage from '../assets/aleix.png'; // Asegúrate de que la ruta sea correcta
import CityZombiesImage from '../assets/CityZombies3.png';
import LibraryOfBabelVideo from '../assets/TheLibraryofBabelReleaseTrailer.mp4';
import Maze3DVideo from '../assets/Raylib_Maze3D.mp4';
import ParatrooperVideo from '../assets/Raylib_Paratrooper.mp4';
import RPrototyperVideo from '../assets/RPrototyper_Demo01_SHORT.mp4';
import SciFiGameVideo from '../assets/UE_Scifi002_SHORT.mp4';
import ProjectCard from './ProjectCard'; // Importar el componente de tarjeta de proyecto

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Datos de los proyectos combinados
  const projects = [
    {
      name: 'The Library of Babel (Unity)',
      videoId: LibraryOfBabelVideo,
      website: 'https://tanukigamestudio.com/our-games/the-library-of-babel',
      data: {
        Title: 'The Library of Babel (Unity)',
        ShortDescription: 'A 2D stealth platformer graphic adventure published in 2023 by TanukiGameStudio and NeonDoctrine for PC and consoles.',
        Description: 'The Library of Babel is a game by TanukiGameStudio (@tanuki_gs), a little studio founded by a group of friends. We started the game in 2020 and we released in 2023 for several platforms such as Steam, EpicGames, PS4, Xbox, Switch and iPhone, thanks to PlayStationTalents-GamesCamp who helped us during the development and NeonDoctrine, an amazing publisher who helped us to complete the game and publish it in more than 10 languages, including Chinese and Japanese. As we were a really small team, my tasks were mainly to implement the AI of the characters (FSM and Behaviour trees) and various systems such as the main character\'s actions, coins system, part of the UI, etc.',
        TechnicalAspects: [
          'AI implementation using FSM and Behaviour trees.',
          'General systems development for gameplay mechanics.',
          'Multi-platform release including Steam, EpicGames, PS4, Xbox, Switch, and iPhone.'
        ],
        URLs: {
          Web: 'https://tanukigamestudio.com/our-games/the-library-of-babel',
        }
      }
    },
    {
      name: 'Maze3D',
      year: 2025,
      videoId: Maze3DVideo,
      website: 'https://acots96.itch.io/maze3d',
      data: {
        Title: 'Maze3D (Raylib/C++)',
        ShortDescription: 'A little game about collecting items and solving mazes made with the graphic library Raylib, shaders for effects and C++.',
        Description: 'This is a simple 3D project made with Raylib and C++ during my master degree where you need to collect all the objects randomly placed in the maze to open the exit.',
        TechnicalAspects: [
          'Mazes loaded dynamically as images checking the color of the pixel.',
          '3D math operations (vectors, quaternions, matrices) for object movement and rotation.',
          'Implemented simple shaders for visual effects.'
        ],
        URLs: {
          Itch: 'https://acots96.itch.io/maze3d',
          Gitlab: 'https://gitlab.com/Acots96/raylib_maze',
        }
      }
    },
    {
      name: 'Paratrooper',
      year: 2025,
      videoId: ParatrooperVideo,
      website: 'https://acots96.itch.io/paratrooper',
      data: {
        Title: 'Paratrooper (Raylib/C++)',
        ShortDescription: 'A tiny replica of the Paratrooper game made with Raylib and C++. I developed my own tiny engine architecture to manage all the objects.',
        Description: 'This is a simple replica of the Paratrooper arcade game made with Raylib and C++ during my master degree.',
        TechnicalAspects: [
          'Implemented a tiny architecture imitating how engines work.',
          'Class Actor for all objects and a class Engine to manage their lifetime and interactions.'
        ],
        URLs: {
          Itch: 'https://acots96.itch.io/paratrooper',
          Gitlab: 'https://gitlab.com/Acots96/raylib_paratrooper',
        }
      }
    },
    {
      name: 'CityZombies (Unity)',
      year: 2021,
      imageUrl: CityZombiesImage,
      website: 'https://acots96.itch.io/cityzombies',
      data: {
        Title: 'CityZombies (Unity)',
        ShortDescription: 'A short zombies 3rd person action game I made during my master degree.',
        Description: 'This is a tiny zombies game made with Unity and C# during my master degree where you have to kill as many zombies as you can and try to find hidden objects in the map.',
        TechnicalAspects: [
          'Modular system for weapons with different behaviors based on weapon type.',
          'Vehicles system with nodes for autonomous movement.'
        ],
        URLs: {
          Itch: 'https://acots96.itch.io/cityzombies',
          Gitlab: 'https://gitlab.com/Acots96/practicafinal3d',
        }
      }
    }
  ];

  // Nuevos proyectos en desarrollo
  const underDevelopmentProjects = [
    {
      name: 'RPrototyper (Raylib/C++)',
      videoId: RPrototyperVideo,
      website: 'https://github.com/Acots96/RPrototyper',
      data: {
        Title: 'RPrototyper (Raylib/C++)',
        ShortDescription: 'A simple scene editor to create your own hierarchy of 3D objects with its components and export it as a JSON ready to load in your game.',
        Description: 'This is a 3D scene editor made with Raylib and modern C++ aimed to load 3D objects, place them in a hierarchy of objects (parent, childs, grandchilds, etc.) and export all together as a JSON ready to be loaded in your Raylib game or wherever you want. The idea came out when I was trying to make a 3D game with Raylib.',
        TechnicalAspects: [
          'MVC to implement separately the UI and the objects in the map.',
          '3D math (vectors, quaternions, matrices, etc.) to allow the translation, rotation and scaling of the objects placed in the map, and a tree structure to allow objects to be placed as childs of other objects.',
          'Check the GitHub repository for more details about the implementation.'
        ],
        URLs: {
          GitHub: 'https://github.com/Acots96/RPrototyper',
        }
      }
    },
    {
      name: 'Sci-fi game (Unreal)',
      videoId: SciFiGameVideo,
      website: 'https://gitlab.com/Acots96/projectutapau',
      data: {
        Title: 'Sci-fi game (Unreal)',
        ShortDescription: 'A 3rd person action-adventure RPG game in early stages.',
        Description: 'I have developed my own modular systems of abilities and movements using UObjects and DataAssets so I can implement all the characters\' different actions and movements such as Link\'s parabella or snowboard. This is a project I am developing to implement some of the main mechanics of my favourite genre: action-adventure RPG games, which include a modular system for abilities and movements, and inventory system with different items, among others.',
        TechnicalAspects: [
          'DataAssets instead of ActorComponents for the abilities, instead it uses one single ActorComponent "AbilitiesManager" to manage all the abilities and movements.',
          'I\'ve used ControlRig and just a couple of animations to implement Link\'s parabella movement and snowboard movement.',
          'Check the GitLab repository for more details about the implementation.'
        ],
        URLs: {
          GitLab: 'https://gitlab.com/Acots96/projectutapau',
        }
      }
    }
  ];

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
        <div className={`mt-4 p-4 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'} text-center`}>
          <p>
            Hi! I am Aleix, a game programmer from Barcelona, Spain, focused on gameplay, systems, and making games feel amazing to play. Mainly working with Unreal Engine and C++, and always looking for ways to push mechanics, feedback, and fun.
            Currently being part of CreekGames as an Unreal dev and working as a Raylib/C++ teacher in a videogames programming degree (CITM – UPC).
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
          className={`mt-4 px-6 py-2 transition duration-500 
            ${darkMode ? 'bg-white text-gray-900 hover:bg-gray-200 border border-gray-300' : 'bg-black text-white hover:bg-gray-800 border border-gray-600'}`}
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
