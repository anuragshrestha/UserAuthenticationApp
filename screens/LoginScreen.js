import AuthContent from '../components/Auth/AuthContent';
import { useContext, useState } from 'react';
import LoadingOverlay from '../components/Ui/LoadingOverlay';
import { login } from '../util/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {

  const[isAuthenticating, setIsAuthenticating] = useState(false);
   const auth = useContext(AuthContext);

  async function loginHandler({email, password}) {

    setIsAuthenticating(true);
    try{
     const token =  await login(email, password);
      auth.authenticate(token);
    } catch(err){
      Alert.alert("Authentication Failed!", "Either your email or password is incorrect.")
      setIsAuthenticating(false);
    }
   
  }

   if(isAuthenticating){
    return <LoadingOverlay message= "Loggin in..."/>
   }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}


export default LoginScreen;