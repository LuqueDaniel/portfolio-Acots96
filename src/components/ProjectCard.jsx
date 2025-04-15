import React from 'react';
import { FaUsers, FaClock, FaCode } from 'react-icons/fa';
import '@justinribeiro/lite-youtube';

const ProjectCard = ({ project, darkMode }) => {
  return (
    <div className={`rounded-none shadow-lg mb-4 ml-4 mr-4 w-80 transition duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <lite-youtube className="w-full h-48 object-cover" videoid={project.videoId} autoload autoplay></lite-youtube>
      <div className={`flex justify-between items-center p-2 transition duration-500 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} opacity-80`}>
        <span className="flex items-center">
          <FaUsers className="mr-1" />
          {project.teamSize} people
        </span>
        <span className="flex items-center">
          <FaClock className="mr-1" />
          {project.duration}
        </span>
        <span className="flex items-center">
          <FaCode className="mr-1" />
          {project.tool}
        </span>
      </div>
      <div className={`p-4 transition duration-500 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <a href={project.website} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-semibold">{project.name} ({project.year})</h3>
        </a>
        <p className="mt-2 text-gray-600">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
