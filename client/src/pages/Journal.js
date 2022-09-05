import React from "react";
import styled from "styled-components";
import AccordianHeader from "../components/AccordianHeader";
import AccordianRow from "../components/AccordianRow";

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


// sample data
const Journal = () => {
  const today = {
    tracked: [
      {
        name: 'pasta',
        macros: '40 / 40 / 20',
        kcal: 800,
      },
      {
        name: 'wilbur burrito',
        macros: '40 / 40 / 20',
        kcal: 800,
      },
      {
        name: 'pasta',
        macros: '40 / 40 / 20',
        kcal: 800,
      },
      {
        name: 'pasta',
        macros: '40 / 40 / 20',
        kcal: 800,
      }
    ],
    totalKcal: 4400,
  }

  return(
    <>
      <AccordianHeader />
      {
        today.tracked.map((value, index) => {
          return(
            <AccordianRow name={value.name} macros={value.macros} kcal={value.kcal} />
          )
        })
      }
    </>
  );
}

export default Journal;