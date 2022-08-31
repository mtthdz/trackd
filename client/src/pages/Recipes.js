import React from "react";
import AccordianHead from "../components/elements/accordian/AccordianHead";
import AccordianRow from "../components/elements/accordian/AccordianRow";

// sample data
const recipeData = [
  {name: 'pasta', macros: '20 / 100 / 12', kcal: 800},
  {name: 'burger & fries', macros: ' 40 / 80 / 45', kcal: 1200},
  {name: 'yoghurt', macros: '5 / 10 / 15', kcal: 250},
]


const Recipes = () => {
  // totals kcal from dataset
  let goalKcal = 3200;
  let totalKcal = 0;


  recipeData.forEach((value) => {
    totalKcal = totalKcal + value.kcal;
  });


  return(
    <section>
      <AccordianHead
        title={"recipe"}
        macros={true}
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

export default Recipes;