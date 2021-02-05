// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Brand from "../brand"
// const IrrigateLogo2 = require("../../images/irrigate-icon.png")

const Header = ({ siteTitle }) => (
  <header>
      <div className="header-elements-container">
        <Brand siteTitle={siteTitle} />
        
      </div>
  </header>
)

/*Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}*/

export default Header
