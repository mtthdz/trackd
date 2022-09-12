import React from "react";
import styled from "styled-components";
import Header from "../components/sections/Header";
import FormRecipe from "../components/elements/forms/FormRecipe";


const WrapperStyles = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  height: 2000px;
`;

const Profile = () => {
  return(
    <>
      <Header />

      <WrapperStyles>
        <FormRecipe />
      </WrapperStyles>
    </>
  );
}

export default Profile;