import React from "react";
import styled from "styled-components";


const VisibleRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
`;

const HiddenRow = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  height: 100%;
  width: 15%;

  button {
    width: 50%;
    text-align: right;
  }

  button:hover,
  button:focus {
    color: red;
  }
`;

const RowStyles = styled.div`
  position: relative;
  width: 100%;
  margin-top: -1px;
  border-bottom: 1px solid #404040;
  border-top: 1px solid #404040;

  p {
    padding: 20px 0;
  }

  p:last-child {
    text-align: right;
  }

  &:hover,
  &:focus {
    background-color: #40404010;

    p:last-child {
      display: none;
    }
  }

  &:hover ${HiddenRow},
  &:focus ${HiddenRow} {
    display: flex;
  }

`;


const AccordianRow = (props) => {
  return(
    <RowStyles>
      <VisibleRow>
        <p>{props.name}</p>
        <p>{props.macros}</p>
        <p>{props.kcal} kcal</p>
      </VisibleRow>

      <HiddenRow>
        <button>edit</button>
        <button>delete</button>
      </HiddenRow>
    </RowStyles>
  )
}

export default AccordianRow;