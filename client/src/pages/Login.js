import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { SignInWithGoogle } from "../utils/Firebase";

const Login = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(user.user) {
      navigate('/recipes');
    };
  }, [user]);


  const login = () => {
    SignInWithGoogle();
    // authorize to backend
    // redirect to main pages
  };

  return(
    <section>
      <button onClick={login}>Log in with Google</button>
    </section>
  );
}

export default Login;