import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { UserContext } from "../context/UserContext"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { dataCategories, dataLocations } from "../data/data"

const Layout: React.FC = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [ categories, setCategories ] = useState<string[]>([])
  const [ locations, setLocations ] = useState<string[]>([])

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

export default Layout
