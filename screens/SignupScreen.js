import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/Ui/LoadingOverlay";
import { Alert } from "react-native";


function SignupScreen() {

  const[isAuthenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler({email, password}) {
    setIsAuthenticating(true);
    try{
      await createUser(email, password);
    } catch(err){
      Alert.alert("Sign Up failed.", "This email is already registered.")
    }
   
    setIsAuthenticating(false);
  }

   if(isAuthenticating){
    return <LoadingOverlay message= "Creating user name"/>
   }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
