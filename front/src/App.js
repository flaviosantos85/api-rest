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
  const [post, setPost] = useState([])

  useEffect( () => {
    fetch('http://127.0.0.1:8000/api/list-posts')
    .then( resp => resp.json() )
    .then( resp => setPost(resp.posts) )
  }, [])

  return (
    <div className='main-container'>
      <Router>
      <div>
        <Routes>
          <Route exact path="/" element={ <List posts={ post } /> } />
          <Route path="/add-post" element={ <Addpost /> } />
          <Route path="/edit-post/:id" element={ <Editpost post={ post } /> } />
        </Routes>
      </div>
    </Router>
      
    </div>
  )
}

export default App;
