import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Introduction from "../components/Introduction/introduction"
import Associations from "../components/Associations/associations"
import SEO from "../components/seo"
import "../style/main.scss"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
    <Associations />
    {/*<Link to="/contact/">Contact</Link> <br />*/}
  </Layout>
)

export default IndexPage
