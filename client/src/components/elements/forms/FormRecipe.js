import React, { useContext } from "react";
import { UserContext } from '../../../App';
import styled from "styled-components";
import { saveRecipe } from "../../../api/RecipeEndpoint";

/**
 * TODO: refactor form styling
 */
const FormContainer = styled.section`
  width: 50%;
  margin: 0 auto;
`;

const FormStyles = styled.form`
  input,
  select {
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
    background: none;
    border: none;
    border-bottom: 1px solid #404040;
    padding: 12px 0;
    margin: 1px 0 25px 0;
  }

  input::placeholder {
    // select has padding i can't get rid of
    padding-left: 4px;
  }
  
  input:focus,
  select:focus {
    outline: none;
    border: 1px blue solid;
    margin: 0 0 25px 0;
  }

  .button {
    background-color: #5D5FEF;
    color: #fff;
    margin-top: 50px;
    padding: 12px 80px 12px 10px;
  }

  .button:hover,
  .button:focus {
    background-color: #5D5FEF99;
    cursor: pointer;
  }
`;


const FormRecipe = () => {
  const { user } = useContext(UserContext);

  const userFormSubmit = (e) => {
    let uid = user.uid;
    let recipe = {
      name: e.target[0].value,
      macros: {
        protein: e.target[1].value,
        carbohydrates: e.target[2].value,
        fats: e.target[3].value
      }
    }

    e.preventDefault();
    saveRecipe(uid, recipe);
  }

  // html to render
  return(
    <FormContainer>
      <FormStyles id="testForm" onSubmit={userFormSubmit}>
        <input type="text" id='formRecipe-name' name='name' placeholder='name' required></input>
        <input type="number" id='formTdee-pro' name='pro' placeholder='protein' required></input>
        <input type="number" id='formTdee-car' name='car' placeholder='carbohydrates' required></input>
        <input type="number" id='formTdee-fat' name='fat' placeholder='fat' required></input>

        <button className="button" id="formRecipe-submit" type="submit" value="submit">save</button>
      </FormStyles>
    </FormContainer>
  );
}

export default FormRecipe;