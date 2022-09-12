import React from "react";
import { signInWithGoogle, signOutWithGoogle } from "../utils/Firebase";

const Journal = () => {

  return(
    <>
      <button onClick={signInWithGoogle}>Log in with Google</button>
      <button onClick={signOutWithGoogle}>Logout</button>
    </>
  );
}

export default Journal;