import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import Journal from './pages/Journal';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import Header from './components/sections/Header';


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
          <Route path="Login" element={ <Login /> } />

          <Route path="/" element={ <Journal /> } />
          <Route path="/recipes" element={ <Recipes /> } />
          <Route path="/profile" element={ <Profile /> } />
        </Routes>
      </WrapperStyles>
    </div>
    </>
  );
}


export default App;