import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-light dark:bg-dark px-2 sm:px-12 w-full">
      <div className="container mx-auto text-center max-w-sm sm:max-w-sm md:max-w-md lg:max-w-2xl">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-dark-text dark:text-light-text font-montserrat">Get in Touch</h2>
          <div className="w-8 h-1 bg-primary mt-1"></div>
        </div>
        <p className="text-lg sm:text-lg font-normal text-dark-text dark:text-light-text mb-8 font-lato">
          I am currently looking for opportunities as a software or web developer. If you have any positions available or just want to connect, please feel free to reach out.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <div className="mt-6">
            <a href="mailto:ach.ganga@outlook.com" className="inline-block text-primary border border-primary py-2 px-4 rounded hover:bg-primary hover:text-white transition">
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
