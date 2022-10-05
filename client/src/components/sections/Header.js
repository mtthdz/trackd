import React, { useContext, useEffect } from "react";
import Nav from '../elements/Nav';
import styled from "styled-components";
import { SignOutWithGoogle } from "../../utils/Firebase";


const HeaderStyles = styled.div`
  box-shadow: 0px 8px 40px 0px #e2e2e2;
  background-color: #eee;
  position: sticky;
  top: 0px;
  width: 100%;
  margin-bottom: 20px;
`;

const WrapperStyles = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  button {
    background: none;
    border: none;
    outline: none;
    font-size: 1.6rem;
  }
`;

const Header = () => {
  return(
    <HeaderStyles>
      <WrapperStyles>
        <Nav />
        <button onClick={SignOutWithGoogle}>logout</button>
      </WrapperStyles>
    </HeaderStyles>
  );
}

export default Header;