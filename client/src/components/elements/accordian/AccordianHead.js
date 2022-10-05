import React, { useState, useEffect } from "react";
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

const AccordianHead = (props) => {
  /**
   * we need a way to making passing props optional from the parent to this
   * row component, without getting errors. We'll utilize state with an
   * initial state value to do this.
   */
  const [title, updateTitle] = useState('');
  const [macros, updateMacros] = useState(false);
  const [kcal, updateKcal] = useState('');


  useEffect(() => {
    for (const key in props) {
      switch(key) {
        case 'title':
          updateTitle(props[key]);
          break;

        case 'macros':
          if(props[key] === true) {
            updateMacros('macros (grams)');
          };
          break;

        case 'kcal':
          updateKcal(props[key]);
          break;

        default:
          return;
      }
    }
  }, [props]);


  return(
    <HeadStyles>
      <p>{title}</p>
      <p>{macros}</p>
      <p>{kcal}</p>
    </HeadStyles>
  )
}

export default AccordianHead;