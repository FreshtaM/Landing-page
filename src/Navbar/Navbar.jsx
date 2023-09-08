import React, { useState } from 'react';
import logo from '../assets/Landie.png'
import bar from '../assets/bar-2-svgrepo-com.svg'
import cross from '../assets/cross-svgrepo-com.svg'
import './nav.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="landing__navbar">

      <div className="landing__navbar-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About</a></p>
          <p><a href="#possibility">Contact</a></p>  
      </div>

      <div className="landing__navbar-links_logo">
          <img src={logo} />
        </div>

      <div className="landing__navbar-sign">
        <button type="button">Buy Now</button>
      </div>


      <div className="landing__navbar-menu">
        {toggleMenu
          ? <img src={cross} color="#fff"  width={40} onClick={() => setToggleMenu(false)} />
          : <img  src={bar} color="#fff"   width={40} onClick={() => setToggleMenu(true)} />
          }
        {toggleMenu && (
        <div className="landing__navbar-menu_container">
          <div className="landing__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">About</a></p>
            <p><a href="#possibility">Contact</a></p>   
          </div>
          <div className="landing__navbar-menu_container-links-sign">
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;