import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import Journal from './pages/Journal';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import TDEE from './pages/TDEE';
import Header from './components/Header';


const WrapperStyles = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;

  button {
    background: none;
    border: none;
    outline: none;
    font-size: 1.6rem;
  }
`;


const App = () => {

  return (
    <>
    <GlobalStyles />
  
    <div className="App">
      <Header />
      <WrapperStyles>
        <Routes>
          <Route path="/Login" element={ <Login /> } />

          <Route path="/" element={ <Journal /> } />
          <Route path="/recipes" element={ <Recipes /> } />
          <Route path="/tdee" element={ <TDEE /> } />
        </Routes>
      </WrapperStyles>
    </div>
    </>
  );
}


export default App;