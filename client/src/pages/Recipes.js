import React from "react";
import AccordianHead from "../components/accordian/AccordianHead";
import AccordianRow from "../components/accordian/AccordianRow";

const Recipes = () => {
  return(
    <section>
      <AccordianHead />
      <AccordianRow
        name={"pasta"}
        macros={"30 / 200 / 14"}
        kcal={1400}
      />
    </section>
  );
}

export default Recipes;