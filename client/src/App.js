import React, {useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Journal from './pages/Journal';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import PrivateRoute from './pages/PrivateRoute';


export const UserContext = React.createContext(null);

const App = () => {
  const [user, setUser] = useState(null);
  const value = useMemo(
    () => ({ user, setUser }),
    [user]
  );

  return (
    <>
      <UserContext.Provider value={value}>
        <GlobalStyles />
          <div className="App">
              <Routes>
                <Route path="/" element={ <Login /> } />

                <Route
                  path="/journal"
                  element={
                    <PrivateRoute>
                      <Journal />
                    </PrivateRoute>
                  } 
                  />
                <Route
                  path="/recipes"
                  element={
                    <PrivateRoute>
                      <Recipes />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
              </Routes>
          </div>
      </UserContext.Provider>
    </>
  );
}


export default App;