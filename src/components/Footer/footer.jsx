import React from "react"
import Brand from "../brand"

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="footer-elements-container">
      <Brand siteTitle={siteTitle} />
      <div className="footer-year">&nbsp;- {new Date().getFullYear()}</div>
    </div>
  </footer>
)

export default Footer
