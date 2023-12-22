import React from 'react';
import "./Body.css"

const Corp = (props) => { // Ajoutez les props comme paramètres ici
  return (
    <div className={props.cName}>
      <div className='Corp'>
        <h1>{props.Titre}</h1>
        <p>{props.Description}</p>
        <a href={props.url} className={props.bouton}>
          {props.textbtn}
        </a>
      </div>
    </div>
  );
};

export default Corp;
