import React, { useState } from 'react';
import AuthService from '../../services/auth.service';
import { IUser } from '../../interfaces/User';

const LoginForm: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const [responseMsg, setResponseMsg] = useState<string>('');
  const initialUser = {
    "email": "", 
    "password": "",
  };

  const [newUser, setNewUser] = useState<IUser>(initialUser);

  const clearUserState = () => {
    setNewUser(initialUser);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewUser(prevNewUser => ({
      ...prevNewUser,
      [name]: value,
    }));
  };

  const sendUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AuthService.login(newUser)
    .then(() => {
      if (localStorage.getItem("user")) {
        let localData = JSON.parse(localStorage.getItem("user")!);
        if (localData.msg === "User authorized") {
          clearUserState();
          setResponseMsg(localData.msg)
          setStatus('SUCCESS');
        } else {
          setResponseMsg("User unauthorized")
          setStatus('ERROR');
        }
      }
    })
    .catch(() => {
      setResponseMsg("User unauthorized");
      setStatus('ERROR');
    });
  };

  return(
    <div className="formContainer" style={{"display":"flex"}}>
      <div className="formTitle">
        <h2>Log in</h2>
      </div> 
      <form
        className="irrigateForm"
        method="post"
        onSubmit={sendUser}
      >
        <label className="formLabel">Email:
          <input 
            type="text" 
            name="email" 
            id="email" 
            onChange={handleChange}
            value={newUser.email}
            required
          />
        </label>
        <label className="formLabel">Password:
          <input 
            type="password" 
            name="password" 
            id="password" 
            onChange={handleChange}
            value={newUser.password}
            required
          />
        </label>
        {status === "SUCCESS" ? <p className="form-result">{responseMsg}</p> : <button className="introduction-button irrigateFormButton" type="submit">Log in</button>}
        {status === "ERROR" && <p className="form-result-error">{responseMsg}</p>}
      </form>
    </div>
  );
};

export default LoginForm;