import config from '../config/config';
import { IUser } from '../interfaces/User';
const API_URL = config.server.serverUrl;
const signUpUrl = config.server.signUp;
const logInUrl = config.server.logIn;

const register = (newUser: IUser) => {
  return fetch(API_URL + signUpUrl, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
};

const login = (newUser: IUser) => {
  return fetch(API_URL + logInUrl, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then((response: any) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  })
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user")!);
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
