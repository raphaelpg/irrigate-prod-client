import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import DeleteUserForm from "../components/Forms/deleteUserForm";

const AccountPage: React.FC = () => (
  <Layout>
    <SEO title="Account" />
    <DeleteUserForm />
  </Layout>
);

export default AccountPage;