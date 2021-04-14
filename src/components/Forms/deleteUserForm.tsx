import React, { useState } from 'react';
import config from '../../config/config';

const DeleteUserForm: React.FC = () => {
  const [status, setStatus] = useState<string>('');

  const deleteUser = () => {
    if (localStorage.getItem("user")) {
      const user: any = JSON.parse(localStorage.getItem("user")!);
      fetch(config.server.serverUrl + config.server.deleteUser, {
        method: 'DELETE',
        body: JSON.stringify({ email: user["user"] }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + user["token"]
        }
      })
      .then(res => res.json())
      .then(() => {
        setStatus('SUCCESS');
      })
      .catch(() => {
        setStatus('ERROR');
      });
    }
  };

  return(
    <div className="contact-container">
      <div className="contact-title">
        <h2>Delete user</h2>
      </div> 
      <div className="contact-form-container">
        {status === "SUCCESS" ? <p className="form-result">Your message has been sent, we will reply soon</p> : <button onClick={deleteUser} className="introduction-button irrigateFormButton" type="submit">Delete account</button>}
        {status === "ERROR" && <p className="form-result-error">There was an error, please try later.</p>}
      </div>
    </div>
  );
};

export default DeleteUserForm;