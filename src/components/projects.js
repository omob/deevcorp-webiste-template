import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const ProjectsWrapper = styled.section`
  margin-top: 5em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`
const Project = styled(BackgroundImage)`
  background-color: ${({ theme }) => theme.bodyBg};
  height: 500px;
  position: relative;
  background-size: contain;
`
const ProjectLink = styled(Link)`
  position: relative;
  & {
    section {
      transition: 0.3s;
    }
  }

  &:hover {
    h4 {
      font-size: 30px;
      visibility: visible;
      bottom: 50%;

      span {
        font-size: 20px;
      }
    }
    section {
      opacity: 0.6 !important;
      transform: translateY(-20px);
    }
  }
`

const ProjectTitle = styled.h4`
//   color: ${({ theme }) => theme.text} !important;
color: #fff;
  font-size: 1px;
  text-transform: capitalize;
  font-weight: 300;
  text-align: center;
  position: absolute;
  bottom: 30%;
  left: 0;
  width: 100%;
  text-decoration: none !important;
  transition: 0.3s;
  visibility: hidden;

  span {
      font-weight: bold;
      letter-spacing: 4px;
      display: block;
      font-size: 1px;
      margin-top: 5px;
  }
`
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
          description {
            description
          }
          projectImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

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
  )
}

export default Projects
