import React from "react";
import AccordianHead from "../elements/accordian/AccordianHead";
import AccordianRow from "../elements/accordian/AccordianRow";
import fetchToday from "../../utils/Date";

// sample data
const recipeData = [
  {name: 'pasta', macros: '20 / 100 / 12', kcal: 800},
  {name: 'burger & fries', macros: ' 40 / 80 / 45', kcal: 1200},
  {name: 'yoghurt', macros: '5 / 10 / 15', kcal: 250},
]
const goalKcal = 3200;


const TodaySection = () => {
  let totalKcal = 0;

  recipeData.forEach((value) => {
    totalKcal = totalKcal + value.kcal;
  });

  return(
    <section>
      <AccordianHead
        title={`today ${fetchToday()}`}
        macros={true}
        kcal={`${totalKcal} / ${goalKcal} kcal`}
      />

      {recipeData.length === 0 || recipeData.length === undefined
        ? <p>Nothing here yet!</p>
        : recipeData.map((value, index) => {
          return <AccordianRow key={index}  name={value.name} macros={value.macros} kcal={value.kcal} />
        })
      }
    </section>
  );
}

export default TodaySection;