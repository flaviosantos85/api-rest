import React, { useEffect, useState } from 'react'
import List from './components/List';
import Addpost from './components/Addpost';
import Editpost from './components/Editpost';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import './App.css';

const App = () => {

  return (
    <div className='main-container'>
      <Router>
      <div>
        <Routes>
          <Route exact path="/" element={ <List /> } />
          <Route path="/add-post" element={ <Addpost /> } />
          <Route path="/edit-post/:id" element={ <Editpost /> } />
        </Routes>
      </div>
    </Router>
      
    </div>
  )
}

export default App;
