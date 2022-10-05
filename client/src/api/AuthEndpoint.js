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
export const getUser = async (firebaseUser) => {
  let token = firebaseUser._tokenResponse.idToken;
  
  try {
    let res = await fetch(`http://localhost:8000/users/auth`, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ token: token }),
    });

    let data = await res.json();
    return data;

  } catch(err) {
    return err;
  }
}