// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Brand from "../brand"
// const IrrigateLogo2 = require("../../images/irrigate-icon.png")

interface IHeaderProps {
  siteTitle: string
}

const Header: React.FC<IHeaderProps> = ({ siteTitle = '' }) => (
  <header>
      <div className="header-elements-container">
        <Brand siteTitle={siteTitle} />
        
      </div>
  </header>
)

export default Header
