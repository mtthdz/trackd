import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Journal from './pages/Journal';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import TDEE from './pages/TDEE';
import Nav from './components/Nav';

const App = () => {

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/journal" element={ <Journal /> } />
        <Route path="/recipes" element={ <Recipes /> } />
        <Route path="/tdee" element={ <TDEE /> } />
      </Routes>
    </div>
  );
}

export default App;