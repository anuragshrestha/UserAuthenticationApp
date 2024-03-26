import axios from "axios";
import { AppState } from "react-native";

const API_KEY = "AIzaSyA4mVO08C0edR4JbqvmE4VeDsmBotTUunE";

async function aunthenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key= ${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

    const token = response.data.idToken;
      return token;
}

export  function createUser(email, password) {
  return aunthenticate("signUp", email, password);
}

export function login(email, password) {
  return aunthenticate("signInWithPassword", email, password);
}
