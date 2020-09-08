import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"

const ClientsWrapper = styled.div`
  max-width: 90%;
  padding-top: 4em;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  .gatsby-image-wrapper {
    height: auto;
    width: 100px;
    margin: 0 auto;
    filter: grayscale(100%);
  }

  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
const Client = styled.div`
  padding: 10px 20px;
  width: fit-content;
  p {
    font-size: 20px;
    line-height: 1.5em;
    font-weight: 300;
    margin-top: 10px;
  }

  &:hover {
    cursor: pointer;

    .gatsby-image-wrapper {
      filter: none;
      transition: 0.7s ease;
    }
  }
  @media (max-width: 768px) {
    & {
      width: content;
      text-align: center;
      justify-items: center;
      p {
        font-size: 1.5em;
      }
    }
  }

  @media (min-width: 768px) {
    & {
      p {
        display: none;
      }

      .gatsby-image-wrapper {
        height: auto;
        width: 150px;
      }
    }
  }

  @media (min-width: 992px) {
    & {
      .gatsby-image-wrapper {
        height: auto;
        width: 200px;
      }
    }
  }
`

const Clients = () => {
  const {
    clients: { nodes: allClients },
  } = useStaticQuery(graphql`
    query GetClients {
      clients: allContentfulClients {
        nodes {
          logo {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          clientName
          id
        }
      }
    }
  `)

  return (
    <ClientsWrapper>
      {allClients.map(({ id, logo, clientName }) => (
        <Client key={id}>
          <Img fluid={logo.fluid} alt={clientName} />
          <p>{clientName}</p>
        </Client>
      ))}
    </ClientsWrapper>
  )
}

export default Clients
