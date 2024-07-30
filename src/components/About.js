import React from 'react';
import profilePic from '../assets/images/profile.jpg';

const About = () => {
  return (
    <section id="about" className="bg-light dark:bg-dark px-2 sm:px-12 w-full py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-start mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-dark-text dark:text-light-text font-montserrat">About Me</h2>
          <div className="w-8 h-1 bg-primary mt-1"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center font-lato">
          <div className="md:w-1/2 md:pr-8">
            <p className="text-lg sm:text-lg font-normal text-dark-text dark:text-light-text mb-4">
              Hi, I'm Ganga Acharya, a passionate Software Developer with a strong background in web development and data analysis. I love to explore new technologies and continuously improve my skills.
            </p>
            <p className="text-lg sm:text-lg font-normal text-dark-text dark:text-light-text mb-4">
              Over the years, I've worked on numerous projects, gaining valuable experience in different programming languages and frameworks. I believe in writing clean, efficient, and scalable code. Apart from coding, I enjoy solving complex problems and making data-driven decisions.
            </p>
            <p className="text-lg sm:text-lg font-normal text-dark-text dark:text-light-text mb-4">
              My goal is to leverage technology to create impactful solutions and improve user experiences.
            </p>
            <div className="mt-10">
              <a href="/resume" target="_blank" rel="noopener noreferrer" className="inline-block text-primary border border-primary py-2 px-4 rounded hover:bg-primary hover:text-white transition">
                Download Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 mt-6 md:mt-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg w-8/12 sm:w-9/12 md:w-11/12 lg:w-7/12 border-4 border-gray-300 dark:border-gray-600">
              <img src={profilePic} alt="Ganga Acharya" className="w-full transition-transform duration-500 ease-in-out transform hover:scale-105" />
              <div className="absolute inset-0 bg-primary opacity-30 hover:opacity-0 transition-opacity duration-500 ease-in-out"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
