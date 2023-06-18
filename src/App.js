import React, { useState, useEffect } from 'react';
import './App.css'
import './Assets/Mouse/cursor.css';
import Home from './Pages/Home'
import Documentation from '../src/Pages/Documentation'
import { Route, Routes } from 'react-router-dom';
import Cursor from './Assets/Mouse/Cursor'
import { Navbar } from './Components';

const App = () => {
  // Get the reference to the navigation links or elements that trigger scrolling
  const navigationLinks = document.querySelectorAll('.nav-link'); // Replace '.nav-link' with the selector for your navigation links

  // Add click event listeners to the navigation links or elements
  navigationLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      // Get the target element's ID from the link's href attribute
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Scroll to the target element smoothly
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={`bg-[#000] min-h-screen text-[#ECD06F] ${theme === 'dark' ? 'dark bg-black text-white' : 'light bg-[#FBfcf8] text-black'}`}>
      <Cursor />
      <Navbar toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path='*' element={<div className='text-center'><h1 className='text-4xl text-center'>Error </h1><a href='/' >Go to Home Page</a></div>} />
      </Routes>
      <div className="dot-animation"></div>
    </div>
  );
};

export default App;
