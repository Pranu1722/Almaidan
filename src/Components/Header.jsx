import React from 'react';
import './Header.css';
import logo2 from './Images/logo2.png';
import login from './Login';
// import signup from './Signup';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
      <img src={logo2} alt='Market Magnet'/>
        <h2>Market Magnet</h2>
      </div>
      <div className="header__centre">
        <ul className="header__lists">
          <li><a href="#">Home</a></li>
          {/* <li><a href="#">Services</a></li> */}
          <div className="header__centerMenu">
            <button>Accomodation</button>
            <div className="dropDown__header">
              <a href="#">I need a Sharing Accommodation</a>
              <a href="#">Sharing Accommodation Available</a>
              <a href="#">Flat available for Rent</a>
              <a href="#">I need a Flat for Rent</a>
            </div>
          </div>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="header__right">
        <button onClick={login}>Sign In</button>
        {/* <button onClick={signup}>Sign Up</button> */}
      </div>
    </div>
  )
}

export default Header


