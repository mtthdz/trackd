import React from "react";
import styled from "styled-components";


const HeadStyles = styled.div`
  border-bottom: 1px solid #404040;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;

  p {
    padding: 40px 0 20px 0;
  }

  p:last-child {
    text-align: right;
  }
`;

const AccordianHead = () => {
  return(
    <HeadStyles>
      <p>name</p>
      <p>macros (grams)</p>
      <p>total kcal</p>
    </HeadStyles>
  )
}

export default AccordianHead;