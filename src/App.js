import React from 'react'
import {MemoryRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import LegalInfo from './pages/LegalInfo'
import './App.css'


const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/legal-info" element={<LegalInfo/>}/>
        </Routes>
      </Router>
  );
}

export default App;