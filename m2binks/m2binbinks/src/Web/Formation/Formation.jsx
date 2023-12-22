'use client'
import React, { useState, useEffect } from 'react';
import './Formation.css';

const Formation = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8081/formation')//API 
      .then((res) => {
        if (!res.ok) {
          throw new Error('Échec de la requête');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Une erreur s'est produite lors du chargement des données.</div>;
  }

  return (
    <div className='debut'>
      {data.map((item) => (
        <div key={item.nom}>
          <div>
            {/* Insérer les éléments de votre carte ici */}
            <h2>{item.formation}</h2>
            <p>à {item.date_heure}</p>
            <p>{item.lieu}</p>
            <div>
              <p>{item.description}</p>
            </div>
            <button
              
              onClick={() => handlePop()}
            >
              S'inscrire à la formation
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Formation;
