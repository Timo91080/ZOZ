'use client'
import React from 'react';
import Accueil from '@/Web/Accueil/Accueil';
import { BrowserRouter as Router, Route, Link,  } from 'react-router-dom';
import "./page.css"
import Connect from '@/Web/Connection/Connect';
import Navbar from '@/Outils/Navbar/Navbar';

const Page = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      
       <Route path="/connect" component={Connect} />
        <Accueil/>
        
        </Router>
    </div>
  );
};

export default Page;
