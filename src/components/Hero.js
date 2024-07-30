import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-start h-screen bg-light dark:bg-dark px-2 sm:px-12 w-full font-montserrat">
      <div className="container mx-auto">
        <div className="mb-2">
          <h1 className="text-xl sm:text-xl font-medium text-primary dark:text-primary">Hello, my name is</h1>
        </div>
        <div className="mb-2">
          <h2 className="text-4xl sm:text-6xl font-semibold text-dark-text dark:text-light-text">GANGA ACHARYA</h2>
        </div>
        <div className="mb-2 text-2xl sm:text-2xl mt-2 font-medium text-dark-text dark:text-light-text">
          <ReactTyped
            strings={[
              'Software Developer.',
              'Web Developer.',
              'Data Analyst.',
              'Tech Enthusiast.'
            ]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </div>
        <div className="flex mt-8 space-x-4">
          <a href="https://github.com/almostTaklu" target='_blank' className="text-4xl sm:text-4xl text-dark-text dark:text-light-text hover:text-primary dark:hover:text-primary" rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/acharyagan" target='_blank' className="text-4xl sm:text-4xl text-dark-text dark:text-light-text hover:text-primary dark:hover:text-primary" rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://x.com/aganga02" target='_blank' className="text-4xl sm:text-4xl text-dark-text dark:text-light-text hover:text-primary dark:hover:text-primary" rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
