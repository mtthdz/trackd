import React, { useEffect, useState } from "react";
import styled from "styled-components";



const VisibleRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 6fr;
`;

const HiddenRow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;

  button {
    text-align: right;
    padding: 20px 10px;
  }

  button:last-child {
    margin-left: 50px;
    padding-right: 0;
  }

  button:hover,
  button:focus {
    color: #5d5fef;
  }
`;

const RowStyles = styled.div`
  position: relative;
  border-bottom: 1px solid #404040;
  border-top: 1px solid #404040;
  margin-top: -1px;

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
  const [name, updateName] = useState('-');
  const [macros, updateMacros] = useState('0 / 0 / 0');
  const [kcal, updateKcal] = useState(0);

  // if props.macros is empty
  // pass macros = '';
  // otherwise, pass name = props.macros;
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
      {/* rows */}
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