import { createContext } from "react";

export const  AuthContext = createContext({
    token : ' ',
    isAuthenticated: false,
    authenticate: ( ) => {

    },
    logout: ( ) => {

    },
});

 function AuthContextProvider({children}){
    <AuthContext.Provider>{children}</AuthContext.Provider>
 }

  return AuthContextProvider;