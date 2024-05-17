import React from "react";
import "./generation.css";
import { MdOutlineCelebration } from "react-icons/md";
import logo_with_shadow from "../../assets/logo_with_shadow.png";

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
        <button>Get Start</button>
        <button>Why Vite?</button>
        <button>View on Github</button>
        <button>
          <MdOutlineCelebration />
          ViteVonf 23!
        </button>
      </div>
      
      <div>
          <img className="container-image" src={logo_with_shadow} alt="massive-logo-in-center" />
        </div>

    </div>
  );
};

export default Generation;
