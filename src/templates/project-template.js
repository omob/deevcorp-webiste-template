import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const HeaderBanner = styled.section`
  height: 400px;
  background-color: red;
`
const Content = styled.section``

const ProjectTemplate = ({ data: { project: project } }) => {
  console.log(project)
  return (
    <Layout>
      <HeaderBanner>
        <h1>{project.title}</h1>
      </HeaderBanner>
      <Content>
        <pre>{project}</pre>
      </Content>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: contentfulProjects(slug: { eq: $slug }) {
      title
      projectImage {
        fixed {
          src
        }
      }
      description {
        content {
          content {
            value
          }
        }
      }
    }
  }
`

export default ProjectTemplate
