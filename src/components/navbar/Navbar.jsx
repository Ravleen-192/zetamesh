import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.jpg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="zm__navbar">
      <div className="zm__navbar-links">
        <div className="zm__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="zm__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wzm">Our Data Offerings</a></p>
          <p><a href="#possibility">Engagement  Models</a></p>
          <p><a href="#features">Past Performance</a></p>
          {/*<p><a href="#blog">Library</a></p>*/}
        </div>
      </div>
      <div className="zm__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="zm__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="zm__navbar-menu_container scale-up-center">
          <div className="zm__navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#wzm">Our Data Offerings</a></p>
          <p><a href="#possibility">Engagement  Models</a></p>
          <p><a href="#features">Past Performance</a></p>
          </div>
          <div className="zm__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
