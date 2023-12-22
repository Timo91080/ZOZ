import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Connect from '@/Web/Connection/Connect';
import { Navigation } from "./Navigation";

const Navbar = () => {
  return (
    <div>
      <nav className='Navbar'>
        <h1 className='navbar-logo'>
          M2LIGUE
        </h1>
        <ul className='stylenav'>
          {Navigation.map((item, index) => (
            <li key={index}>
              <Link to={item.cName}>{item.titre}</Link>
            </li>
          ))}
          <li>
            <Link to="/connect">Se connecter</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
