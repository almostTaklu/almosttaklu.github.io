import React, { useState, useEffect, useRef } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useClickOutside } from '../hooks/useClickOutside';
import { useScrollHide } from '../hooks/useScrollHide';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const isNavbarVisible = useScrollHide(true, 50);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();

  useClickOutside(menuRef, (event) => {
    if (buttonRef.current && buttonRef.current.contains(event.target)) {
      return;
    }
    setIsMenuOpen(false);
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleMenu = (e) => {
    e.stopPropagation(); // Stop event propagation to avoid conflicts
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <>
      <nav
        className={`bg-light dark:bg-dark fixed w-full z-50 transform ${
          isNavbarVisible || isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled && !isMenuOpen ? 'shadow-lg' : ''} transition-transform duration-300 ease-in-out`}
      >
        <div className="container mx-auto max-w-screen-xl flex font-montserrat items-center justify-between py-4 px-6">
          <div className="text-2xl font-semibold text-dark-text dark:text-light-text">Ganga Acharya</div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className=" text-dark-text dark:text-light-text relative hover-underline">Home</Link>
            <a href="#about" className=" text-dark-text dark:text-light-text relative hover-underline">About</a>
            <a href="#skills" className=" text-dark-text dark:text-light-text relative hover-underline">Skills</a>
            <a href="#projects" className="text-dark-text dark:text-light-text relative hover-underline">Projects</a>
            <a href="#contact" className="text-dark-text dark:text-light-text relative hover-underline">Contact</a>
            <button
              onClick={toggleTheme}
              className="ml-8 relative"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <FaSun className="text-xl text-dark-text dark:text-light-text" /> : <FaMoon className="text-xl text-dark-text dark:text-light-text" />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="mr-4 relative"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <FaSun className="text-xl text-dark-text dark:text-light-text" /> : <FaMoon className="text-xl text-dark-text dark:text-light-text" />}
            </button>
            <button ref={buttonRef} onClick={toggleMenu} className="text-2xl dark:text-white relative">
              <FaBars className={`transition-opacity duration-300 ease-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} aria-label="Open Menu" />
              <FaTimes className={`absolute top-0 left-0 transition-opacity duration-300 ease-out ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} aria-label="Close Menu" />
            </button>
          </div>
        </div>
      </nav>
      <div
        ref={menuRef}
        className={`md:hidden bg-light dark:bg-dark fixed top-16 w-full transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } z-40`}
        style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
      >
        <div className="container mx-auto max-w-screen-xl py-4 px-6">
          <Link to="/" className="block px-6 py-2 text-lg text-dark-text dark:text-light-text hover:text-primary dark:hover:text-primary">Home</Link>
          <a href="#about" className="block px-6 py-2 text-lg text-dark-text dark:text-light-text hover:text-primary dark:hover:text-primary">About</a>
          <a href="#skills" className="block px-6 py-2 text-lg text-dark-text dark:text-light-text hover:text-primary dark:hover:text-primary">Skills</a>
          <a href="#projects" className="block px-6 py-2 text-lg text-dark-text dark:text-light-text hover:text-primary dark:hover:text-primary">Projects</a>
          <a href="#contact" className="block px-6 py-2 text-lg text-dark-text dark:text-light-text hover:text-primary dark:hover:text-primary">Contact</a>
        </div>
      </div>
      {isMenuOpen && <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-30" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
