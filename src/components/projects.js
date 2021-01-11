import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Project from "./project";

const ProjectsWrapper = styled.section`
  margin-top: 5em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
 
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    align-content: center;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    & {
      gap: 25px;
    }
  }
`;



const Projects = () => {
  const {
    projects: { nodes: projectsList },
  } = useStaticQuery(graphql`
    query ProjectsQuery {
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

  return (
    <>
      <ProjectsWrapper>
        {projectsList.map(
          ({ title, slug, type, projectImage: { fluid: image } }) => (
           <Project image={image} title={title} slug={slug} type={type} />
          )
        )}
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
