import React from "react";
import "./navbar.css";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import logo from "../../assets/logo.svg";
import { MdDarkMode } from "react-icons/md";
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbaricons">
        <img
        className="navbaricons-img"
          src={logo}
          alt="logoimage"
        //   width="(max-width: 80px) 80px,
        //  80px"
        //   height="40px"
        />
        {/* <div className="search-bar">
          <input placeholder="search"></input>
          <div className="navbar-serchicons">
          <button>cltrK</button>
          <IoSearchSharp />

          </div>
        </div> */}
            <div className="search-bar">
      <input type="text" placeholder="Search..." className="search-input" />
      <button className="search-button">Search</button>
      <div className="search-icon">
        <FaSearch />
      </div>

      </div>
      </div>

      <div>
        <ul className="navbar-ul">
          <li>Guide</li>
          <li>Config</li>
          <li>Plugins</li>
          <li>Resources</li>
          <li>Version</li>
          <li>
            <IoLanguageSharp />
          </li>
          <li>
            <MdDarkMode />
          </li>
          <li>
            <FaTwitter /> <a href="https://x.com/?lang=en&mx=2" />
          </li>
          <li>
            <FaDiscord /> <a href="https://github.comdiscord/" />
          </li>
          <li>
            <FaGithub /> <a href="https://github.com/"></a>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
