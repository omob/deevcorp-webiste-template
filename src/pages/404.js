import React from "react"

import Layout from "../components/layout"
import styled from "styled-components";
import SEO from "../components/seo"


const Wrapper = styled.div`
  margin-top: 4em;
  text-align: center;

  & > p {
    font-size: 2em;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... go back home.</p>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
