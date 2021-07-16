import { useState } from "react";
import { useHistory } from "react-router-dom";

function SignUp() {
  const history = useHistory();

  function onSignUp(form: { id: string; pw: string }): void {
    console.log(form);
    // history.push("/") //go To Main Page
  }

  return <div>Sign Up!</div>;
}

export default SignUp;
