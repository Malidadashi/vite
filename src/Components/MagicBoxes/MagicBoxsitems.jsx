import React from "react";
import "./MagicBoxsitems.css";

const MagicBoxsitems = ({ image, title, text }) => {
  return (
    <div className="magicbox">
      <img src={image} alt="tinyicons"  className="magicbox-image"/>
      <h3 className="magicbox-h3">{title}</h3>
      <p className="magicbox-p">{text}</p>
    </div>
  );
};

export default MagicBoxsitems;
