import React, { useState } from 'react';
import { navigate } from 'gatsby';
import AuthService from '../../services/auth.service';
import { IUser } from '../../interfaces/User';

const DeleteUserForm: React.FC = () => {
  const [status, setStatus] = useState<string>('');

  const deleteUser = () => {
    if (localStorage.getItem('user')) {
      const user: IUser = JSON.parse(localStorage.getItem('user')!);
      AuthService.remove(user)
      .then(res => res.json())
      .then((result) => {
        if (result.msg === 'User deleted') {
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
      {status === "SUCCESS" ? <p className="form-result">User account delete, see you soon</p> : <button onClick={deleteUser} className="deleteFormButton" type="submit">Delete account</button>}
      {status === "ERROR" && <p className="form-result-error">There was an error, please try later.</p>}
    </div>
  );
};

export default DeleteUserForm;