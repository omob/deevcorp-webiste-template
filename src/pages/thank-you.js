import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from "../components/layout";


const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 10;

    div {
        background-color: ${({ theme }) => theme.bodyBg};
        padding: 40px 30px;
        text-align: center;
        border-radius: 20px;
        margin: 5%;
    }
  background-color: ${({ theme }) => theme.body};

  p {
    font-size: 1.4em;
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
        <ContainerWrapper>
         <div>
            <h1>Thank you!</h1>
            <p>Your form submission has been received.</p>

            <Link to="/">
                {" "}
                <span>← Back to home page</span>{" "}
            </Link>

         </div>
        </ContainerWrapper>
      </Layout>
    );
}

export default ThanYouPage;