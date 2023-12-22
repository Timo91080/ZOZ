'use client'
import React from 'react';
import './Accueil.css';
import { BrowserRouter } from 'react-router-dom';
import ConnectContextProvider from '../Connection/Connect';

import Corp from "../Body/Body";


const Accueil = () => {
  return (
    <div className='grosse'>
          
          <Corp
            cName="Corps"
            Titre="Notre mission, votre compétence"
            Description="Le sport, c'est la vie : Démarrez votre parcours avec nos cours de formation"
            textbtn="Nous Rejoindre"
            bouton="show"
          />
         
    </div>
  );
};

export default Accueil;
