import React from "react";
import "./generation.css";
import { MdOutlineCelebration } from "react-icons/md";
import logo_with_shadow from "../../assets/logo_with_shadow.png";
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';

const openWebsite = () => {
  window.open('https://reactrouter.com/en/main/components/link', '_blank');
};


// Component containing a button to open the website
const OpenWebsiteButton = () => {
  const history = useHistory();

  const openWebsite = () => {
    // Replace 'https://example.com' with the website URL you want to open
    const websiteURL = 'https://reactrouter.com/en/main/components/link';
    window.open(websiteURL, '_blank');
  };

}



const Generation = () => {


  return (
    <div className="generation">

      <div className="first-box">
        <div className="first-box-text">
          <p>Vite</p>
          <p>Next Generatoin</p>
          <p>Frontend Tooling</p>
          <p>Get Ready for a development environment that can</p>
          <p>finally catch up with you</p>
        </div>
      </div>
      <div className="btn-container">
        <button onClick={openWebsite}>Get Start</button>
        <button>Why Vite?</button>
        <button>View on Github</button>
        <button>
          <MdOutlineCelebration />
          ViteVonf 23!
        </button>
      </div>

      <div>
        <img
          className="container-image"
          src={logo_with_shadow}
          alt="massive-logo-in-center"
        />
      </div>
    </div>
  );
};

export default Generation;
