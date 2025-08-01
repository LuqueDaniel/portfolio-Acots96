import React, { useState, useRef, useEffect, useMemo } from 'react';
import { FaGlobe, FaItchIo, FaGitlab, FaGithub, FaPlay, FaSteam } from 'react-icons/fa';
import '@justinribeiro/lite-youtube';

const ProjectCard = ({ project, darkMode }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const media = project.media;
  const videoRef = useRef(null);
  const [loadingThumbnail, setLoadingThumbnail] = useState(false);

  useEffect(() => {
    setCurrentMediaIndex(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (project.media && project.media[0] && project.media[0].type === 'video') {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 100);
    }
  }, [project]);

  const handleMediaChange = (index) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setLoadingThumbnail(true);
    setCurrentMediaIndex(index);

    if (media[index].type === 'video' && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }

    setTimeout(() => {
      setLoadingThumbnail(false);
    }, 500);
  };

  const links = useMemo(() => [
    { key: 'Web', url: project.data.URLs.Web, icon: <FaGlobe />, label: 'Web' },
    { key: 'Itch', url: project.data.URLs.Itch, icon: <FaItchIo />, label: 'Itch' },
    { key: 'Gitlab', url: project.data.URLs.Gitlab, icon: <FaGitlab />, label: 'GitLab' },
    { key: 'Github', url: project.data.URLs.Github, icon: <FaGithub />, label: 'GitHub' },
    { key: 'Steam', url: project.data.URLs.Steam, icon: <FaSteam />, label: 'Steam' },
  ], [project]);

  return (
    <div className={`group rounded-none shadow-lg mb-6 mx-2 w-full sm:w-full lg:w-1/3 transition duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-2 border-transparent hover:border-cyan-300`}>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {media[currentMediaIndex].type === 'video' ? (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-black" />
            <video ref={videoRef} className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 hover:opacity-100 opacity-75" autoPlay loop muted>
              <source src={media[currentMediaIndex].url} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </>
        ) : (
          <img src={media[currentMediaIndex].url} alt={project.data.Title} className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-100 opacity-75" />
        )}
      </div>

      <div className="flex justify-center mt-2 z-10">
        {media.map((item, index) => (
          <button
            key={index}
            className={`w-18 h-12 mx-1 rounded ${currentMediaIndex === index ? 'border-2 border-blue-500' : 'border border-transparent'} transition duration-300 relative ${currentMediaIndex === index ? 'border-2 border-blue-500' : 'hover:border-gray-500'}`}
            onClick={() => handleMediaChange(index)}
          >
            <div className="relative w-full h-full">
              <img
                src={item.type === 'video' ? item.caption : item.url}
                alt={`Thumbnail ${index}`}
                className={`w-full h-full object-cover rounded`}
              />
              {item.type === 'video' && (
                <FaPlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl" />
              )}
            </div>
          </button>
        ))}
      </div>

      <div className={`p-6 transition duration-500 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold group-hover:text-cyan-300">
            {project.data.Title}
          </h3>
          <div className="flex space-x-2">
            {links.map(
              ({ key, url, icon, label }) =>
                url && (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-gray-300"
                  >
                    {icon}
                    <span className="ml-1">{label}</span>
                  </a>
                )
            )}
          </div>
        </div>

        <div className={`mt-2 p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
          <p className="text-justify">{project.data.ShortDescription}</p>
        </div>

        <h4 className="mt-4 font-semibold">Description:</h4>
        <p className="mb-4 text-justify">{project.data.Description}</p>

        <hr className="my-4 border-gray-300" />

        <h4 className="mt-4 font-semibold">Technical Aspects:</h4>
        <ul className="list-disc list-inside mb-4">
          {project.data.TechnicalAspects.map((aspect, index) => (
            <li
              key={index}
              className={`py-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition duration-300 hover:text-cyan-500`}
              dangerouslySetInnerHTML={{ __html: aspect }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
