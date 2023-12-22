import React from 'react';
import Accueil from '@/Web/Accueil/Accueil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '@/Outils/Navbar/Navbar';
import Connect from '../Web/Connection/Connect';

import "./page.css";

const Page = () => {
  return (
    <Router>
      <div className='header'>
        <Navbar />
        <Switch>
          <Accueil/>
          <Route path="/connect" component={Connect} />
          {/* Autres routes */}
          <Route path="/" component={Accueil} /> {/* Route par défaut */}
        </Switch>
      </div>
    </Router>
  );
};

export default Page;
