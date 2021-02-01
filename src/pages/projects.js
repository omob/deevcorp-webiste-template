import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Masonry } from "masonic";
import React from "react";
import styled from "styled-components";
import { SectionWrapper } from ".";
import Layout from "../components/layout";
import SEO from "../components/seo";


  const HeadingSection = styled(SectionWrapper)`
  `;

  const HeadingText = styled.h2`
    font-size: 2em;
    text-align: center;
    margin: auto;
    font-weight: normal;
    line-height: 1.3em;

    @media (min-width: 550px) {
      & {
        font-size: 3em;
        line-height: 1.2em;
      }
    }
    @media (min-width: 992px) {
      & {
        font-size: 4em;
      }
    }
    @media (min-width: 1500px) {
      & {
        font-size: 5em;
      }
    }

  `;

  const PortfolioWrapper = styled.div`
    padding: 20px;
    width: 100%;
    max-width: 2080px;
    margin: 20px auto 0;
    box-sizing: border-box;
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
  <div style={{position: "relative"}} key={index}>
    <Img fluid={image} alt={title} />
    <h4>{title}</h4>
    <h4>{type}</h4>
  </div>
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
          Our portfolio range from Web Design to Application Development to
          UI/UX
        </HeadingText>
      </HeadingSection>
      <PortfolioWrapper>
        <Masonry items={projectsList} columnGutter={20} overscanBy={5} columnWidth={300} render={MasonryCard} />
      </PortfolioWrapper>
    </Layout>
  );
};

export default Projects;
