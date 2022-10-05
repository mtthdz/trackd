import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { SignInWithGoogle } from "../utils/Firebase";
import styled from 'styled-components';
import { getUser } from "../api/AuthEndpoint";


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
    cursor: pointer;
  }
`;


const Login = () => {

  const loginTest = async () => {
    try {
      let firebaseUser = await SignInWithGoogle();
      let uid = await getUser(firebaseUser);

      console.log(uid);
      return uid;

    } catch(err) {
      console.log(err);
      return err;
    }
  };

  return(
    <WrapperStyles>
      <h1>trackd is a macronutrient tracking app.</h1>
      <button onClick={loginTest}>login with Google</button>
    </WrapperStyles>
  );
}

export default Login;