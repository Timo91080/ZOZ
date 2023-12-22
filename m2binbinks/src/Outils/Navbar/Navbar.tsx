import React from 'react';
import './Navbar.css';
import { Navigation } from "./Navigation";
import Connect, { useConnectContext } from "../../Web/Connection/Connect"; // Importez Connect et useConnectContext depuis Connect
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const Navbar = () => {
  const connectContext = useConnectContext(); // Utilisez useConnectContext pour accéder au contexte ConnectContext

  return (
    <Router>
      <div>
        <nav className='Navbar'>
          <h1 className='navbar-logo'>
            M2LIGUE
          </h1>
          <ul className='stylenav'>
            {Navigation.map((item, index) => (
              <li key={index}>
                <a href={item.cName}>{item.titre}</a>
              </li>
            ))}
            <li>
              <Link to="/connection">Se connecter</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navbar;
