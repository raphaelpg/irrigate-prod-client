import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { UserContext } from "../context/UserContext"
import Header from "./Header/header"
import Footer from "./Footer/footer"
import { dataCategories, dataLocations } from "../data/data.js"

const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [ categories, setCategories ] = useState([])
  const [ locations, setLocations ] = useState([])

  useEffect(() => {
    setCategories([...dataCategories])
    setLocations([...dataLocations])
  }, [])

  return (
    <UserContext.Provider value={{ categories, locations }} >
      <div className="app-container">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div className="main-container">
          <main>{children}</main>
        </div>
        <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
      </div>
    </UserContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
