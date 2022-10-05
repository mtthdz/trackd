import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";


const StyledNav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 2% 0;

  h1 {
    font-size: 1.6rem;
    font-weight: normal;
    margin-right: 80px;
  }

  nav {
    ul {
      display: flex;
      flex-wrap: nowrap;
  
      li {
        padding: 4px 12px;
        margin-right: 10px;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  color: black;
`;


const Nav = () => {
  return(
    <StyledNav>
        <h1>trackd</h1>

        <nav>
          <ul>
            <li><StyledLink to="/journal">journal</StyledLink></li>
            <li><StyledLink to="/recipes">recipes</StyledLink></li>
            <li><StyledLink to="/profile">profile</StyledLink></li>
          </ul>
        </nav>
    </StyledNav>
  )
}

export default Nav;