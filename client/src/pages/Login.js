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

  /**
   * Auth Process via Firebase Auth & Mongodb
   * 1. log Gmail user in via Firebase auth API
   * 2. grab user's metadata object, and is passed to MongoDB server
   * 3. (back end) verify firebase idToken with Firebase server
   * 4. (back end) return back uid
   * 5. update global state with user object
   */
  const auth = async () => {
    try {
      let firebaseUser = await SignInWithGoogle();
      let authorizedUser = await getUser(firebaseUser);
      return authorizedUser;

    } catch(err) {
      return err;
    }
  };

  return(
    <WrapperStyles>
      <h1>trackd is a macronutrient tracking app.</h1>
      <button onClick={auth}>login with Google</button>
    </WrapperStyles>
  );
}

export default Login;