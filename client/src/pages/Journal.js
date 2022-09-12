import React from "react";
import { signInWithGoogle } from "../utils/Firebase";

// sample data
const Journal = () => {

  return(
    <>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  );
}

export default Journal;