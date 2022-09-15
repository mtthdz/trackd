/**
 * 
 * @param {*} uid firebase auth object
 * @param {*} name firebase auth object
 * @param {*} email firebase auth object
 * 
 * post method to create a new user. Nested inside findUser()
 */
const registerUser = (uid, name, email) => {
  fetch(`http://localhost:8000/users/add`, {
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      uid,
      name,
      email,
    }),
  }).then(res => {
    return res;
  })
}

/**
 * 
 * @param {*} uid firebase auth object
 * @param {*} name firebase auth object
 * @param {*} email firebase auth object
 * 
 * function will look for user via uid query argument;
 *  if user with the uid is found, it'll fetch user data
 *  else user will be created by running registerUser()
 * TODO: write function to fetch user data
 */
export const findUser = (uid, name, email) => {
  fetch(`http://localhost:8000/users/${uid}`, {
      method: 'get',
    }).then(res => {
      if (res.ok) {
        return res.json();

      } else {
        return (res.json()).then(data => {
          throw new Error(data.message);
        });
      };
    })
    .then(data => {
      if(data === 'user does not exist') {
        registerUser(uid, name, email);

      } else {
        // get function here
        console.log(data);
      }   
    })
    .catch((error) => {
      return error;
    })
}
