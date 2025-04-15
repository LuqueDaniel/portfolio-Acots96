import React, { useState } from 'react';
import { FaGlobe, FaItchIo, FaGitlab, FaGithub, FaPlay } from 'react-icons/fa';
import '@justinribeiro/lite-youtube';

const ProjectCard = ({ project, darkMode }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0); // Estado para el índice del medio actual
  const media = project.media; // Obtener el array de medios

  return (
    <div className={`group rounded-none shadow-lg mb-6 mx-2 w-full sm:w-1/3 transition duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-2 border-transparent hover:border-cyan-300`}>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {/* Video o imagen sin efecto de desaturación */}
        {media[currentMediaIndex].type === 'video' ? (
          <video className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-100 opacity-75" autoPlay loop muted>
            <source src={media[currentMediaIndex].url} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        ) : (
          <img src={media[currentMediaIndex].url} alt={project.data.Title} className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-100 opacity-75" />
        )}

        {/* Carrusel para cambiar entre medios, visible al hacer hover sobre el video o la imagen */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center mt-2 z-10 opacity-0 transition-opacity duration-300 hover:opacity-100">
          {media.map((item, index) => (
            <button 
              key={index} 
              className={`w-12 h-12 mx-1 rounded ${currentMediaIndex === index ? 'border-2 border-blue-500' : 'border border-transparent'} transition duration-300 relative`} 
              onClick={() => setCurrentMediaIndex(index)} // Cambiar al medio correspondiente al hacer clic
            >
              {item.type === 'video' ? (
                <div className="relative w-full h-full">
                  <img src={item.url} alt={`Thumbnail ${index}`} className="w-full h-full object-cover rounded" />
                  <FaPlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl" />
                </div>
              ) : (
                <img src={item.url} alt={`Thumbnail ${index}`} className="w-full h-full object-cover rounded" />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className={`p-6 transition duration-500 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold group-hover:text-cyan-300">
            {/* Se ha eliminado el hipervínculo del nombre del proyecto */}
            {project.data.Title}
          </h3>
          <div className="flex space-x-2">
            {project.data.URLs.Web && (
              <a href={project.data.URLs.Web} target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-gray-300">
                <FaGlobe />
                <span className="ml-1">Web</span>
              </a>
            )}
            {project.data.URLs.Itch && (
              <a href={project.data.URLs.Itch} target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-gray-300">
                <FaItchIo />
                <span className="ml-1">Itch</span>
              </a>
            )}
            {project.data.URLs.Gitlab && (
              <a href={project.data.URLs.Gitlab} target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-gray-300">
                <FaGitlab />
                <span className="ml-1">GitLab</span>
              </a>
            )}
            {project.data.URLs.Github && (
              <a href={project.data.URLs.Github} target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-gray-300">
                <FaGithub />
                <span className="ml-1">GitHub</span>
              </a>
            )}
          </div>
        </div>
        
        {/* ShortDescription con fondo gris claro */}
        <div className={`mt-2 p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
          <p>{project.data.ShortDescription}</p>
        </div>

        <h4 className="mt-4 font-semibold">Description:</h4>
        <p className="mb-4">{project.data.Description}</p>

        {/* Separador entre Descripción y Aspectos Técnicos */}
        <hr className="my-4 border-gray-300" />

        <h4 className="mt-4 font-semibold">Technical Aspects:</h4>
        <ul className="list-disc list-inside mb-4">
          {project.data.TechnicalAspects.map((aspect, index) => (
            <li key={index}>{aspect}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
