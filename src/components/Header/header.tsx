import React from "react"
import Brand from "../brand"

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
