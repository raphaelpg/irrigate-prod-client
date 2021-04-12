import React from "react";
import { Link } from "gatsby";
import Brand from "../Brand/brand";

interface IHeaderProps {
  siteTitle: string
};

const Header: React.FC<IHeaderProps> = ({ siteTitle = '' }) => {
  return (
  <header>
    <div className="header-elements-container">
      <Brand siteTitle={siteTitle} />
      <div className="header-right-container">
        <Link className="header-link" to="/about">About</Link>
        <Link className="header-link" to="/contact">Contact Us</Link>
        <Link className="header-link" to="/register">Sign up</Link>
        <Link className="header-link" to="/login">Log in</Link>
        {/* <button className="header-button">Log in</button> */}
      </div>
    </div>
  </header>
  );
};

export default Header;