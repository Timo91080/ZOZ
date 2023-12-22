'use client'
import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Connect.css';

// Création du contexte
const ConnectContext = React.createContext();

// Fonction utilitaire pour simplifier l'utilisation du contexte
export const useConnectContext = () => {
  return useContext(ConnectContext);
};


const Connect = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  // Fonctions de gestion des événements
  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Ajoute ici la logique de soumission du formulaire si nécessaire
  };

  const handleAdminLogin = () => {
    // Ajoute ici la logique de connexion en mode administrateur si nécessaire
  };

  const handleClose = () => {
    // Ajoute ici la logique de fermeture du composant si nécessaire
  };

  return (
    // Fournis le contexte et les fonctions dans la valeur du contexte
    <ConnectContext value={{ email, password, handleEmailChange, handlePasswordChange, handleSubmit, handleAdminLogin, handleClose }}>
      <div>
        <div>
          <div>
            <h5>Connect</h5>
            <button onClick={handleClose}>&times;</button>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div >
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div>
                <p>
                  En cliquant sur "Login", vous acceptez les conditions d'utilisation.
                </p>
                <div>
                  <button type="submit">Login</button>
                  <button type="button" onClick={handleAdminLogin}>
                    Se connecter en mode administrateur
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ConnectContext>
  );
};

export default Connect;
