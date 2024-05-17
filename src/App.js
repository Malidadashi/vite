import React from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Generation from './Components/Generation/Generation'
import MagicBoxsContainers from './Components/MagicBoxes/MagicBoxsContainers.jsx'


import { useState } from 'react';
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div id='dark-mode-btn' className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Navbar/>
      <Generation/>
      <MagicBoxsContainers/>

    </div>
  );
}

export default App;