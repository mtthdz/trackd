import React, { useState } from "react";
import styled from "styled-components";

const AccordianStyles = styled.section``;
const AccordianHeader = styled.div`
  border-bottom: 1.5px solid #c1c1c1;
  display: grid;
  grid-template-columns: 2fr 2fr 6fr;

  .nav-header {
    margin: 34px 0 16px 0;
  }
  
  .nav-header:last-child {
    text-align: right;
  }
`;
const AccordianRow = styled.div``;

const TodayData = {
  recorded: [
    {
      timestamp: '00:00:00',
      unitOfMeasurement: 'metric',
      recipe: true,
      name: 'Chicken & Waffles',
      description: 'lorem ipsum',
      macronutrients: {
        protein: 500,
        carbohydrates: 500,
        fats: 500,
      },
      totalKCal: 1000,
    },
    {
      timestamp: '00:00:00',
      unitOfMeasurement: 'metric',
      recipe: true,
      name: 'Chicken & Waffles',
      description: 'lorem ipsum',
      macronutrients: {
        protein: 500,
        carbohydrates: 500,
        fats: 500,
      },
      totalKCal: 1000,
    },
    {
      timestamp: '00:00:00',
      unitOfMeasurement: 'metric',
      recipe: true,
      name: 'Chicken & Waffles',
      description: 'lorem ipsum',
      macronutrients: {
        protein: 500,
        carbohydrates: 500,
        fats: 500,
      },
      totalKCal: 1000,
    },
    {
      timestamp: '00:00:00',
      unitOfMeasurement: 'metric',
      recipe: true,
      name: 'Chicken & Waffles',
      description: 'lorem ipsum',
      macronutrients: {
        protein: 500,
        carbohydrates: 500,
        fats: 500,
      },
      totalKCal: 1000,
    },
    {
      timestamp: '00:00:00',
      unitOfMeasurement: 'metric',
      recipe: true,
      name: 'Chicken & Waffles',
      description: 'lorem ipsum',
      macronutrients: {
        protein: 500,
        carbohydrates: 500,
        fats: 500,
      },
      totalKCal: 1000,
    },
  ],
  date: 'dd-mm-yyyy',
  person: 'Matt',
}

const UserMeta = {
  name: 'Matt',
  tdee: 3200,
}












const Accordian = () => {
  /**
   * 1. set a current total variable
   * 2. use a loop to calculate total kcal from TodayData array
   * 3. implement a state value
   */

  const [currentTotal, updateCurrentTotal] = useState(0);

  TodayData.recorded.map((journalItem) => {
    currentTotal = currentTotal + journalItem.totalKCal;
  });
  
  const calculateTotal = () => {
    // append the TodayData.recorded array with another object
  
    // in tandem, sum the total recorded kcals from the TodayData object
  }


  return(
    <AccordianStyles>
      {/* header */}
      <AccordianHeader>
        <p className="nav-header">Title</p>
        <p className="nav-header">Macros</p>
        <p className="nav-header">0 / {UserMeta.tdee} KCal</p>
      </AccordianHeader>
      <button onClick={calculateTotal}>calculate total</button>

      {/* rows */}
      <div></div>
    </AccordianStyles>
  )
}

export default Accordian;