import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Journal from './pages/Journal';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import { auth } from './utils/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import PrivateRoute from './pages/PrivateRoute';


export const UserContext = React.createContext(null);

const App = () => {
  const [user, setUser] = useState(null);

  /**
   * changes global state of signed in user
   * attached to Firebase auth, so no need for
   * updating state value in child components
   */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [user]);

  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
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