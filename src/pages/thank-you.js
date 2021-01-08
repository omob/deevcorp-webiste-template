import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from "../components/layout";


const Container = styled.div`
  margin: auto;
  margin-top: 100px;
  padding: 20px;
  padding-top: 10%;
  width: 100%;
  top: 0;
  text-align: center;
  position: fixed;
  background-color: ${({ theme }) => theme.bodyBg};
  z-index: 10;
  height: 100%;

  p {
    font-size: 2em;
    line-height: 1em;
  }

  a {
    color: inherit;
    font-weight: bold;
    font-size: 1.3em;

    span {
      font-style: italic;
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.bodyBg};
      transition: 0.2s ease-in;
    }
    span:hover {
      background-color: ${({ theme }) => theme.bodyBg};
      color: gray;
    }
  }
`;

function ThanYouPage(props) {
    return (
      <Layout>
        <Container>
          <h1>Contact</h1>
          <p>Thank you for your submission!</p>

          <Link to="/">
            {" "}
            <span>Go Back</span>{" "}
          </Link>
        </Container>
      </Layout>
    );
}

export default ThanYouPage;