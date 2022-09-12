import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { SignInWithGoogle } from "../utils/Firebase";
import styled from 'styled-components';

const WrapperStyles = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  height: 2000px;
`;

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
    <WrapperStyles>
      <button onClick={login}>Log in with Google</button>
    </WrapperStyles>
  );
}

export default Login;