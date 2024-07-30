import React from 'react';
import Blogger from '../assets/images/Blogger.png';
import DummyImage from '../assets/images/webcrawler.webp';

const Projects = () => {
  const projectData = [
    {
      title: "Simple Blog Site",
      description: "A simple and intuitive blogging platform built with the MEAN Stack (MongoDB, Express, Angular, Node.js) using MVC architecture. Users can create, manage, and engage with blog posts through comments and reactions.",
      languages: "JavaScript, Angular, Node.js, Express, MongoDB",
      type: "Personal Project",
      image: Blogger,
      github: "https://github.com/almostTaklu/MEAN-Project",
      live: "http://3.84.81.133/"
    },
    {
      title: "UML Editor",
      description: "A Python-based UML Editor using MVC architecture for efficient CLI and GUI diagram management. Features a custom parser and CI/CD pipeline, ensuring application reliability with robust exception handling and 100% pytest coverage. Includes an accessible, user-friendly GUI, refined through user feedback.",
      languages: "Python, Tkinter, Pygame, pytest",
      type: "Team Project",
      image: Blogger,
      github: "https://github.com/mucsci-students/2024sp-420-PythonB",
      live: null // No live link for this project
    },
    {
      title: "Search Engine",
      description: "A Java search engine using PostgreSQL, integrating Potter Stemmer and stopword filtering. Implements advanced search algorithms, PageRank, and indexing techniques for document retrieval. Features inverted indices for quick, precise searches across vast datasets and link graph analysis for result prioritization.",
      languages: "Java, PostgreSQL, Gradle, Tomcat",
      type: "Team Project",
      image: DummyImage,
      github: null, // No github link
      live: null // No live link for this project
    }
  ];

  return (
    <section id="projects" className="bg-light dark:bg-dark px-2 sm:px-12 w-full py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-start mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-dark-text dark:text-light-text font-montserrat">Projects</h2>
          <div className="w-8 h-1 bg-primary mt-1"></div>
        </div>
        <div className="space-y-8 font-lato">
          {projectData.map((project, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center bg-light dark:bg-dark overflow-hidden w-full ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {project.image && (
                <div className={`relative w-full md:w-5/12 hidden md:block ${index % 2 === 1 ? 'md:rounded-r-lg' : 'md:rounded-l-lg'}`}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg flex justify-center items-center">
                    <img src={project.image} alt={project.title} className={`w-[500px] h-[350px] object-cover transition-transform duration-500 ease-in-out transform ${index % 2 === 1 ? 'rounded-r-lg' : 'rounded-l-lg'}`} />
                    <div className="absolute inset-0 bg-primary opacity-30 hover:opacity-0 transition-opacity duration-500 ease-in-out"></div>
                  </div>
                </div>
              )}
              <div className={`relative p-6 flex-1 flex flex-col justify-center bg-light-card dark:bg-dark-card rounded-lg z-10 shadow-lg w-full md:w-7/12 ${index % 2 === 1 ? 'md:-mr-10' : 'md:-ml-10'}`}>
                <p className="text-xs sm:text-sm text-primary dark:text-primary mb-1">{project.type}</p>
                <h3 className="text-2xl sm:text-2xl font-semibold mb-2 text-dark-text dark:text-light-text">{project.title}</h3>
                <p className="text-base sm:text-base text-dark-text dark:text-light-text mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.languages.split(', ').map((language, idx) => (
                    <span key={idx} className="bg-primary text-white px-1.5 py-0.5 rounded text-tiny sm:text-sm">
                      {language}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end mt-auto">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-primary mr-4">
                      <i className="fa-brands fa-github text-lg sm:text-xl"></i>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                      <i className="fa-solid fa-up-right-from-square text-lg sm:text-xl"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
