import React from 'react';
import '../css/NavBar.css';

const NavBar = props => {
  return (
    <nav>
      <a href='/'>
        <img src="./images/logo_transparent.png" alt="BryBit Logo"></img>
        <h1>BryBit</h1>
      </a>
      <ul>
        <li>
          <input placeholder = "Search"></input>
        </li>
        <li>
          <a href="/trade">Trade</a>
        </li>
        <li>
          <a href="/ranks">Ranks</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup" id ='signup'>Sign up</a>
        </li>
        <li>
          <a href="/myProfile">Profile</a>
        </li>
      </ul>
    </nav>
  );
};


export default NavBar;