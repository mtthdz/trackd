import React, { useEffect, useState } from "react";
import styled from "styled-components";


/**
 * for hover states to work on child (styled) elements, the children
 * must be defined prior to parent, hence the weird styling order.
 */
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
    color: #5d5fef;
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
  /**
   * we need a way to making passing props optional from the parent to this
   * row component, without getting errors. We'll utilize state with an
   * initial state value to do this.
   */
  const [name, updateName] = useState('-');
  const [macros, updateMacros] = useState('0 / 0 / 0');
  const [kcal, updateKcal] = useState(0);


  useEffect(() => {
    for (const key in props) {
      switch(key) {
        case 'name':
          if(props[key] !== undefined) {
            updateName(props[key]);
          };
          break;

        case 'macros':
          if(props[key] !== undefined) {
            updateMacros(props[key]);
          };
          break;

        case 'kcal':
          if(props[key] !== undefined) {
            updateKcal(props[key]);
          };
          break;

        default:
          return;
      }
    }
  }, [props]);


  return(
    <RowStyles>
      <VisibleRow>
        <p>{name}</p>
        <p>{macros}</p>
        <p>{kcal} kcal</p>
      </VisibleRow>

      <HiddenRow>
        <button>edit</button>
        <button>delete</button>
      </HiddenRow>
    </RowStyles>
  )
}

export default AccordianRow;