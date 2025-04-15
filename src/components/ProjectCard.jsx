import React from 'react';
import { FaGlobe, FaItchIo, FaGitlab, FaGithub } from 'react-icons/fa';
import '@justinribeiro/lite-youtube';

const ProjectCard = ({ project, darkMode }) => {
  // Construir la URL del video o la imagen
  const videoUrl = project.videoId;
  const imageUrl = project.imageUrl;

  return (
    <div className={`rounded-lg shadow-lg mb-4 mx-2 w-full sm:w-1/3 transition duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {project.videoId ? (
          <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
            <source src={videoUrl} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        ) : (
          <img src={imageUrl} alt={project.data.Title} className="absolute top-0 left-0 w-full h-full object-cover" />
        )}
      </div>
      <div className={`p-6 transition duration-500 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">
            <a href={project.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {project.data.Title}
            </a>
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
