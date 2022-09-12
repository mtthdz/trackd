import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { SignInWithGoogle } from "../utils/Firebase";
import styled from 'styled-components';

const WrapperStyles = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  margin-top: 30vh;

  h1 {
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 300;
    margin-right: 8%;
    color: #40404090;
  }

  button {
    outline: none;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color: #404040;
  }

  button:hover,
  button:focus {
    color: #40404070;
  }
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
      <h1>trackd is a macronutrient tracking app.</h1>
      <button onClick={login}>login with Google</button>
    </WrapperStyles>
  );
}

export default Login;