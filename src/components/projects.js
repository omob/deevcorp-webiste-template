import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Project from "./project";

const ProjectsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: auto;
  margin-top: 5em;

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



;

const Projects = () => {
  const {
    projects: { nodes: projectsList },
  } = useStaticQuery(graphql`
    query ProjectsQuery {
      projects: allContentfulProjects(
        limit: 4
        filter: { slug: { ne: "sanabliss-global" } }
      ) {
        nodes {
          slug
          title
          type
          info {
            info
          }
          projectImage {
            fluid(quality: 100) {
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
           <Project key={title} image={image} title={title} slug={slug} type={type} />
          )
        )}
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
