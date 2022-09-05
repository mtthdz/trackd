import React from "react";
import styled from "styled-components";

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

const FormTdee = () => {
  const userFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  // html to render
  return(
    <FormContainer>
      <FormStyles id="testForm" onSubmit={userFormSubmit}>
        <input type="text" id='formTdee-name' name='name' placeholder='name' required></input>

        <select id='formTdee-gender' name='gender' required>
          <option value="" disabled selected>gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>

        <input type="number" id='formTdee-age' name='age' placeholder='age' required></input>
        <input type="number" id='formTdee-height' name='{height}' placeholder='height (cm)' required></input>
        <input type="number" id='formTdee-weight' name='weight' placeholder='weight (kg)' required></input>

        <select id='formTdee-activity' name='activity-level' required>
          <option value="" disabled selected>activity level</option>
          <option value="al1">little to none</option>
          <option value="al2">light exercise (1 - 3 times per week)</option>
          <option value="al3">moderate exercise (3 - 5 times per week)</option>
          <option value="al4">heavy physical exercise (5 - 6 times per week)</option>
        </select>

        <select id='formTdee-nutrition' name='nutrition-target' required>
          <option value="" disabled selected>nutrition target</option>
          <option value="m">maintenance</option>
          <option value="b1">bulk (0.5lb per week)</option>
          <option value="b2">bulk (1lb per week)</option>
          <option value="c1">cut (0.5lb per week)</option>
          <option value="c2">cut (1lb per week)</option>
        </select>

        <button className="button" id="formTdee-submit" type="submit" value="submit">calculate</button>
      </FormStyles>
    </FormContainer>
  );
}

export default FormTdee;