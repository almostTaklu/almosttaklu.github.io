import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light dark:bg-dark py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base text-dark-text dark:text-light-text font-lato">
          &copy; {new Date().getFullYear()} Designed and Built by Ganga Acharya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
