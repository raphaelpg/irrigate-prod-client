import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Brand from "../Brand/brand";
import authServices from '../../services/auth.service';

interface IHeaderProps {
  siteTitle: string
};

const Header: React.FC<IHeaderProps> = ({ siteTitle = '' }) => {
  const [currentUser, setCurrentUser] = useState<any>(undefined);
  
  const logout = () => {
    authServices.logout();
    setCurrentUser(undefined);
  };

  useEffect(() => {
    const user = authServices.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    };
  }, []);
  
  return (
  <header>
    <div className="header-elements-container">
      <Brand siteTitle={siteTitle} />
      <div className="header-right-container">
        <Link className="header-link" to="/about">About</Link>
        <Link className="header-link" to="/contact">Contact Us</Link>
        { currentUser ? (
          <div className="header-logger-container">
            <Link className="header-link" to="/register">User</Link>
            <button className="header-button" onClick={logout}>Log out</button>
          </div>
        ) : (
          <div className="header-logger-container">
            <Link className="header-link" to="/register">Sign up</Link>
            <Link className="header-link" to="/login">Log in</Link>
          </div>
        )  
      }
      </div>
    </div>
  </header>
  );
};

export default Header;