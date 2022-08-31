import React from "react";


const TdeeForm = () => {
  const userFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  // html to render
  return(
    <section>
      <form id="testForm" onSubmit={userFormSubmit}>
        <label htmlFor='user-name'>name</label>
        <input type="text" id='user-name' name='name'></input>

        <label htmlFor='user-gender'>gender</label>
        <input type="text" id='user-gender' name='gender'></input>

        <button type="submit" value="submit">Submit</button>
      </form>
    </section>
  );
}

export default TdeeForm;