import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Try from "../components/Try/tryComponent";

const TryPage: React.FC = () => (
  <Layout>
    <SEO title="Try" />
    <Try />
  </Layout>
);

export default TryPage;