import AuthContent from '../components/Auth/AuthContent';
import { useState } from 'react';
import LoadingOverlay from '../components/Ui/LoadingOverlay';
import { login } from '../util/auth';
import { Alert } from 'react-native';

function LoginScreen() {

  const[isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({email, password}) {

    setIsAuthenticating(true);
    try{
      await login(email, password);
    } catch(err){
      Alert.alert("Authentication Failed!", "Either your email or password is incorrect.")
    }
    setIsAuthenticating(false);
  }

   if(isAuthenticating){
    return <LoadingOverlay message= "Loggin in..."/>
   }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}


export default LoginScreen;