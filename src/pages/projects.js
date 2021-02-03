import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Masonry } from "masonic";
import React from "react";
import styled from "styled-components";
import { SectionWrapper } from ".";
import Layout from "../components/layout";
import SEO from "../components/seo";


  const HeadingSection = styled(SectionWrapper)`
    padding-top: 1em;
  `;

  const HeadingText = styled.h2`
    font-size: 2em;
    text-align: center;
    margin: auto;
    font-weight: normal;
    line-height: 1.3em;
    font-weight: bold;

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

    @media (min-width: 550px) {
      & {
        font-size: 3em;
        line-height: 1.2em;
      }
    }
    @media (min-width: 992px) {
      & {
        font-size: 3.5em;
        max-width: 80%;
      }
    }
    @media (min-width: 1500px) {
      & {
        font-size: 4em;
      }
    }
  `;

  const PortfolioWrapper = styled.div`
    padding: 5%;
    width: 100%;
    max-width: 1400px;
    margin: auto;
  `;

  const Project = styled.div`
    height: auto;
    padding: 20px;
    background-color: ${({ theme }) => theme.bodyBg};
    a {
      color: inherit;
      text-decoration: none;
    }

    h4 {
      font-size: 1.5em;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    span {
      letter-spacing: 2px;
      text-transform: uppercase;
      font-size: 16px;
    }
  `;

const MasonryCard = ({
  index,
  data: {
    title,
    slug,
    type,
    projectImage: { fluid: image },
  },
  width,
}) => (
  <Project key={index}>
    <Link to={`${slug}`}>
      <Img fluid={image} alt={title} />
      <h4>{title}</h4>
      <span>{type}</span>
    </Link>
  </Project>
);

const Projects = () => {
   const {
     projects: { nodes: projectsList },
   } = useStaticQuery(graphql`
     query PortfoliosQuery {
       projects: allContentfulProjects {
         nodes {
           slug
           title
           type
           info {
             info
           }
           projectImage {
             fluid {
               ...GatsbyContentfulFluid
             }
           }
         }
       }
     }
   `);

   console.log(projectsList)
  return (
    <Layout>
      <SEO title="Projects" />
      <HeadingSection style={{ marginTop: "4em" }}>
        <HeadingText>
          Our Portfolio range from <span>Web Design</span> to{" "}
          <span>Application </span> Development to <span>UI/UX</span>
        </HeadingText>
      </HeadingSection>
      <PortfolioWrapper>
        <Masonry
          items={projectsList}
          columnGutter={10}
          overscanBy={1}
          columnWidth={320}
          render={MasonryCard}
        />
      </PortfolioWrapper>
    </Layout>
  );
};

export default Projects;
