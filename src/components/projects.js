import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

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

const Project = styled(BackgroundImage)`
  height: 400px;
  position: relative;
  background-size: cover;

  @media (min-width: 768px) {
    & {
      height: 600px;
    }
  }

  @media (min-width: 1280px) {
    & {
      height: 750px;
    }
  }
`;

const ProjectLink = styled(Link)`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  ${'' /* background-color: ${({ theme }) => theme.body}; */}
 

  & {
    transition: 0.3s;
  }

  &:hover {
     background-color: #000;
    transform: translateY(-20px);

    section {
      opacity: 0.6 !important;
    }

    h4 {
      font-size: 30px;
      visibility: visible;
      bottom: 50%;

      span {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 550px) {
    & {
      h4 {
        visibility: visible;
        font-size: 1.6em;

        span {
          font-size: 18px !important;
          font-weight: 300;
        }
      }
      section {
        opacity: 0.6 !important;
      }
    }
  }

  @media (min-width: 550px) and (max-width: 768px) {
    & {
      h4 {
        visibility: visible;
        font-size: 2em;

        span {
          font-size: 24px !important;
          font-weight: 300;
        }
      }
      section {
        opacity: 0.6 !important;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    &:hover {
      h4 {
        font-size: 2em;
        bottom: 50%;
        span {
          font-size: 30px;
        }
      }
    }
  }

  @media (min-width: 1280px) {
    &:hover {
      h4 {
        font-size: 2.5em !important;
        bottom: 50%;
        span {
          font-size: 40px;
        }
      }
    }
  }
`;

const ProjectTitle = styled.h4`
  ${'' /* color: ${({ theme }) => theme.text} !important; */}
  color: #fff;
  font-size: 1px;
  text-transform: capitalize;
  font-weight: 400;
  text-align: center;
  position: absolute;
  bottom: 40%;
  left: 0;
  width: 100%;
  text-decoration: none !important;
  transition: 0.3s;
  visibility: hidden;

  span {
    font-weight: 300;
    letter-spacing: 4px;
    display: block;
    font-size: 1px;
    margin-top: 10px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
            <ProjectLink to={"projects/" + slug} key={slug}>
              <Project Tag="section" fluid={image}></Project>
              <ProjectTitle>
                {title}
                <span>{type}</span>
              </ProjectTitle>
            </ProjectLink>
          )
        )}
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
