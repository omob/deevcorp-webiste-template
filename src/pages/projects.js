import { navigate } from "gatsby";
import React from "react";
import Button from "../components/button";
import Layout from "../components/layout";
import SEO from "../components/seo";
const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <div style={{ textAlign: "center", marginTop: "5em" }}>
        <h2>Page not availabe... </h2>
        <Button title="Go back" onClick={() => navigate("/")} />
      </div>
    </Layout>
  );
};

export default Projects;
