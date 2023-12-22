import React from 'react';
import './Accueil.css';
import Connect from '../Connection/Connect';
import Navbar from '@/Outils/Navbar/Navbar';
import Corp from "../Body/Body";
import Formation from '../Formation/Formation';

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
        <Formation /> 
      </div>
  
  );
};

export default Accueil;
