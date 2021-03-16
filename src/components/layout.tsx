import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { AppContext } from "../context/AppContext";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import { IAssociation } from '../interfaces/Association';
import { serverUrl, dataCategories, dataLocations } from "../data/data";

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

  const [ categories, setCategories ] = useState<string[]>([]);
  const [ locations, setLocations ] = useState<string[]>([]);
  const [ associations, setAssociations ] = useState<IAssociation[]>([]);

  const retrieveAssociationsList = () => {
    fetch(serverUrl + "/api/causes")
      .then(response => response.json())
      .then(resultData => {
        setAssociations(resultData)
    	});
  }

  useEffect(() => {
    setCategories([...dataCategories]);
    setLocations([...dataLocations]);
    retrieveAssociationsList();
  }, [])

  return (
    <AppContext.Provider value={{ categories, locations, associations, retrieveAssociationsList }} >
      <div className="app-container">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div className="main-container">
          <main>{children}</main>
        </div>
        <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
      </div>
    </AppContext.Provider>
  )
}

export default Layout
