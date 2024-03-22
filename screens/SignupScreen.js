import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/Ui/LoadingOverlay";


function SignupScreen() {

  const[isAuthenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler({email, password}) {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  }

   if(isAuthenticating){
    return <LoadingOverlay message= "Creating user name"/>
   }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
