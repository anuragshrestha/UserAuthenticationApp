import { createContext, useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/Ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";


function SignupScreen() {

  const[isAuthenticating, setIsAuthenticating] = useState(false);

  const auth = useContext(AuthContext)

  async function signUpHandler({email, password}) {
    setIsAuthenticating(true);
    try{
     const token =  await createUser(email, password);
      auth.authenticate(token);
    } catch(err){
      Alert.alert("Sign Up failed.", "This email is already registered.");
      setIsAuthenticating(false);
    }
   
    
  }

   if(isAuthenticating){
    return <LoadingOverlay message= "Creating user name"/>
   }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
