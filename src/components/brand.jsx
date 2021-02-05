import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
const IrrigateLogo2 = require("../images/irrigate-icon.png")

const Brand = ({ siteTitle }) => (
  <Link className="brand-container" to="/" >
    <img className="irrigate-logo" src={IrrigateLogo2} alt="Planete Earth Irrigate Logo"></img>
    <h1 className="brand">
      {siteTitle}
    </h1>
  </Link>
)

Brand.propTypes = {
  siteTitle: PropTypes.string,
}

Brand.defaultProps = {
  siteTitle: ``,
}

export default Brand
