import React, {useContext} from "react";
import { UserContext } from "../App";
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {
  const currentUser = useContext(UserContext);

  return currentUser.user ? children : <Navigate to='/' replace />;
}

export default PrivateRoute;