import React from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Generation from './Components/Generation/Generation'
import MagicBoxsContainers from './Components/MagicBoxes/MagicBoxsContainers.jsx'
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import Title from './Components/Sponsers/title/Title.jsx'
import OpenWebsiteButton from './Components/Generation/Generation.jsx'

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

      <Router>
        <div>
          <Route path="/newtab" component={OpenWebsiteButton} />
        </div>
      </Router>

      <Navbar />
      <Generation />
      <MagicBoxsContainers />
      <Title />


    </div>
  );
}

export default App;