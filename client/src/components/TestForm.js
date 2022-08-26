import React from "react";


const TestForm = () => {
  // variables to work with
  let formData = {
    recipeName: '',
    recipeDescription: '',
  }


  // component functionality
  const submitFunction = (event) => {
    event.preventDefault();

    // TODO change target[] names for syntax purposes
    formData.recipeName = event.target[0].value;
    formData.recipeDescription = event.target[1].value;

    // api call
    fetch('http://localhost:8000/recipes/add', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        name: formData.recipeName,
        description: formData.recipeDescription,
      }),
    }).then(res => {
      console.log(res);
    });
  };


  // html to render
  return(
    <div>
      <form id="testForm" onSubmit={submitFunction}>
        <label htmlFor='name'>Name</label>
        <input type="text" id='name' name='name'></input>

        <label htmlFor='email'>email</label>
        <input type="text" id='email' name='email'></input>

        <button type="submit" value="submit">Submit</button>
      </form>
    </div>
  );
}

export default TestForm;