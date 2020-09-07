import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ProjectTemplate = ({ data }) => {
  console.log(data)
  return <Layout>|</Layout>
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
