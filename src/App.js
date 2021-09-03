import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios';
import Business from './Components/Business';
import Job from './Components/Job'
import FurthurStudies from './Components/FurthurStudies';
import Header from './Components/Header';
import Home from './Components/Home';


function App() {

  return (

    <Router>
      <Header />
       <Route path='/' component={Home} exact />
       <Route path='/jobs' exact component={Job} exact />
       <Route path='/further-studies' exact component={FurthurStudies} exact />
       <Route path='/business' exact component={Business} exact />
    </Router>

    
  );
}

export default App;
