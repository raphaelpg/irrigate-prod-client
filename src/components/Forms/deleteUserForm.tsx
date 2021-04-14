import React, { useState } from 'react';
import { navigate } from 'gatsby';
import AuthService from '../../services/auth.service';
import { IUser } from '../../interfaces/User';

const DeleteUserForm: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const [displayConfirmation, setDisplayConfirmation] = useState<boolean>(false);

  const toggleConfirmation = () => {
    displayConfirmation ? setDisplayConfirmation(false) : setDisplayConfirmation(true);
  }

  const deleteUser = () => {
    if (localStorage.getItem('user')) {
      const user: IUser = JSON.parse(localStorage.getItem('user')!);
      AuthService.remove(user)
      .then(res => res.json())
      .then((result) => {
        if (result.msg === 'User deleted') {
          toggleConfirmation();
          setStatus('SUCCESS');
          AuthService.logout();
          setTimeout(() => {
            navigate('/');
          }, 1000)
        }
      })
      .catch(() => {
        setStatus('ERROR');
      });
    }
  };

  return(
    <div className="delete-container">
      <h2 className="delete-label">Delete user</h2>
      {status === "SUCCESS" ? <p className="form-result">User account deleted, see you soon</p> : <button onClick={toggleConfirmation} className="deleteFormButton" type="submit">Delete account</button>}
      {status === "ERROR" && <p className="form-result-error">There was an error, please try later.</p>}
      {displayConfirmation 
        ? (
          <div>
            <div className="confirmation-form">
              <p style={{margin: "auto"}}>Please confirm deletion of your account:</p>
              <div className="confirmation-button-container">
                <button className="cancel-button" onClick={toggleConfirmation}>Cancel</button>
                <button className="deleteFormButton" onClick={deleteUser}>Confirm</button>
              </div>
            </div>
          </div>
        ) 
        : (
          <>
          </>
        )}
    </div>
  );
};

export default DeleteUserForm;