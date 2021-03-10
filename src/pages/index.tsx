import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import Introduction from "../components/Introduction/Introduction"
import Associations from "../components/Associations/Associations"
import SEO from "../components/Seo"
import "../style/main.scss"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
    <Associations />
    {/*<Link to="/contact/">Contact</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>*/}
  </Layout>
)

export default IndexPage
