import React, {useContext, useEffect, useState} from "react";
import { UserContext } from "../App";
import styled from "styled-components";

import Header from "../components/sections/Header";
import AccordianHead from "../components/elements/accordian/AccordianHead";
import AccordianRow from "../components/elements/accordian/AccordianRow";
import { getRecipes } from "../api/RecipeEndpoint";


// sample data
// const recipeData = [
//   {name: 'pasta', macros: '20 / 100 / 12', kcal: 800},
//   {name: 'burger & fries', macros: ' 40 / 80 / 45', kcal: 1200},
//   {name: 'yoghurt', macros: '5 / 10 / 15', kcal: 250},
// ]

const WrapperStyles = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

const Recipes = () => {
  // totals kcal from dataset
  // let goalKcal = 3200;
  // let totalKcal = 0;
  
  let {user} = useContext(UserContext);
  let [recipes, setRecipes] = useState([]);

  const getUserRecipes = async (uid) => {
    let fetchRecipes = await getRecipes(uid);
    setRecipes(fetchRecipes);
  }

  useEffect(() => {
    getUserRecipes(user.uid);
  }, [setRecipes]);
  
  // recipeData.forEach((value) => {
  //   totalKcal = totalKcal + value.kcal;
  // });


  return(
    <>
      <Header />

      <WrapperStyles>
        <AccordianHead
          title={"recipe"}
          macros={true}
        />

        {recipes.length === 0 || recipes.length === undefined
          ? <p>Nothing here yet!</p>
          : recipes.map((value, index) => {
            return <AccordianRow key={index}  name={value.name} macros={0} kcal={0} />
          })
        }
      </WrapperStyles>
    </>
  );
}

export default Recipes;