import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.div`
  border-bottom: 1.5px solid #404040;
  display: grid;
  grid-template-columns: 2fr 2fr 6fr;

  .nav-header {
    margin: 34px 0 16px 0;
  }
  
  .nav-header:last-child {
    text-align: right;
  }
`;


const AccordianHeader = () => {
  const userTdee = 3200;

  return(
    <HeaderStyles>
      <p className="nav-header">Title</p>
      <p className="nav-header">Macros</p>
      <p className="nav-header">0 / {userTdee} KCal</p>
    </HeaderStyles>
  )
}

export default AccordianHeader;