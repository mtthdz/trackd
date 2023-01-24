/**
 * 
 * @param {*} firebaseUser firebase auth value
 * @returns authorizedUser
 *
 * - nested function within ../pages/Login > auth
 * - this function will use the firebaseUser object and send to the server
 * - the server will then complete the authorization process and send back
 *   the logged in user object.
 */
export const getUser = async (firebaseUser) => {
  let token = firebaseUser._tokenResponse.idToken;

  try {
    let res = await fetch(`http://localhost:8000/users/auth`, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ token: token }),
    });

    let authorizedUser = await res.json();
    return authorizedUser;

  } catch(err) {
    return err;
  }
}