import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import Journal from './pages/Journal';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import Header from './components/sections/Header';
import { auth } from './utils/Firebase';
import { AuthProvider } from './utils/authContext';
import { onAuthStateChanged } from 'firebase/auth'

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
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <>
    <GlobalStyles />
  
    <div className="App">
      <Header />

      <WrapperStyles>
        <AuthProvider value={{currentUser}}>
          <Routes>
              <Route path="Login" element={ <Login /> } />

              <Route path="/" element={ <Journal /> } />
              <Route path="/recipes" element={ <Recipes /> } />
              <Route path="/profile" element={ <Profile /> } />
          </Routes>
        </AuthProvider>
      </WrapperStyles>
    </div>
    </>
  );
}


export default App;