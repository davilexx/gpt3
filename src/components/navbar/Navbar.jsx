import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/svg/logo.svg';
import './navbar.css';

function Navbar() {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <ul className="gpt3__navbar-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#wgpt3">What is GPT3?</a>
            </li>
            <li>
              <a href="#possibility">Open AI</a>
            </li>
            <li>
              <a href="#features">Case Studies</a>
            </li>
            <li>
              <a href="#blog">Library</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
