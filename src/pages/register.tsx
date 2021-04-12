import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RegisterForm from "../components/Forms/registerForm";

const RegisterPage: React.FC = () => (
  <Layout>
    <SEO title="Contact" />
    <RegisterForm />
  </Layout>
);

export default RegisterPage;