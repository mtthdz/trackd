import React from "react";
import styled from "styled-components";
import Accordian from "../components/Accordian";


const WrapperStyles = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  height: 2000px;

  button {
    background: none;
    border: none;
    outline: none;
    font-size: 1.6rem;
  }
`;


const Journal = () => {
  return(
    <WrapperStyles>
      <Accordian />
    </WrapperStyles>
  );
}

export default Journal;