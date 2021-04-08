import React, { useState } from "react";
import { Link } from "gatsby";
import Brand from "../Brand/brand";
import AddUserForm from "../Forms/addUserForm";

interface IHeaderProps {
  siteTitle: string
};

const Header: React.FC<IHeaderProps> = ({ siteTitle = '' }) => {
  const [displaySignUpForm, setDisplaySignUpForm] = useState<boolean>(false);

  const toggleUserForm = (status: boolean) => {
		setDisplaySignUpForm(status);
	};

  return (
  <header>
      <div className="header-elements-container">
        <Brand siteTitle={siteTitle} />
        <div className="header-right-container">
          <Link className="header-link" to="/about">About</Link>
          <Link className="header-link" to="/contact">Contact Us</Link>
          <button className="header-button" onClick={() => toggleUserForm(true)}>Sign up</button>
          <button className="header-button">Log in</button>
        </div>
        <AddUserForm
          displaySignUpForm = {displaySignUpForm}
          toggleUserForm = {toggleUserForm}
        />
      </div>
  </header>
  );
};

export default Header;