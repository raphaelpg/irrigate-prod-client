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

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(function(response) {
//     // The response is a Response instance.
//     // You parse the data into a useable format using `.json()`
//     return response.json();
//   }).then(function(data) {
//     // `data` is the parsed version of the JSON returned from the above endpoint.
//     console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
//   });

const login = async (newUser: IUser) => {
  await fetch(API_URL + logInUrl, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then((response: any) => {
    return response.json();
  })
  .then((data: any) => {
    if (data.token) {
      localStorage.setItem("user", JSON.stringify(data));
    }
    return data;
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
