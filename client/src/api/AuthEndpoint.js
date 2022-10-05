/**
 * 
 * @param {*} token firebase auth value
 * 
 * nested function within ../utils/Firebase > SignInWithGoogle
 * this function completes the following task within SignInWithGoogle: 
 * "2. grab user's idToken, pass to back end server"
 * 
 * TODO: implement authorization via JWT
 */
export const getUser = (idToken) => {
  fetch(`http://localhost:8000/users/find`, {
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ idToken }),
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
    return data;
  })
  .catch((error) => {
    return error;
  })
}