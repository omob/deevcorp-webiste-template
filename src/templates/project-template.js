import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const SectionWrapper = styled.section`
  padding-left: 10%;
  padding-right 10%;
  padding-top: 4em;
  padding-bottom: 4em;

  p {
    font-weight: 300;
    font-size: 1.5em;
    line-height: 1.7em
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.26em;
    }
  }
`

const HeaderBanner = styled(SectionWrapper)`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  h1 {
    font-size: 5em;
    margin-bottom: 0px;
    font-weight: bolder;
  }
  p {
    font-size: 2.5em;
    display: block;
  }

  @media (max-width: 768px) {
    & {
      // min-height: 300px;
      height: content;
    }
    h1 {
      font-size: 3.5em;
      margin-bottom: 10px;
    }
    p {
      font-size: 1.8em;
    }
  }
`
const Content = styled(SectionWrapper)`
  height: contain;
  background-color: #0b0b0b;
  background-color: ${({ theme }) => theme.bodyBg};
`

const ProjectTemplate = ({ data: { project } }) => {
  console.log(project)
  return (
    <Layout>
      <HeaderBanner>
        <h1>{project.title}</h1>
        <p>{project.type}</p>
      </HeaderBanner>
      <Content>
        <p>
          Etiam rhoncus vitae elit et luctus. Donec ultricies metus ex, vel
          tempus lectus congue sed. Cras suscipit ligula quis dui sollicitudin,
          in vehicula diam sollicitudin. Curabitur id lorem eget metus lacinia
          suscipit. Vestibulum interdum vehicula condimentum. Aliquam a euismod
          ipsum. Etiam ornare, mi quis porttitor ultricies, eros ipsum luctus
          leo, vitae interdum nibh sem id sem. Pellentesque vel tellus
          ultricies, tempor nulla quis, maximus arcu. Ut tempus velit mauris,
          sed ultricies orci pharetra quis. Nulla sed tortor diam. Aliquam
          mattis nisi diam, in condimentum velit semper nec. Nam turpis massa,
          facilisis sed ligula tempus, porta sagittis risus. Cras porttitor nisl
          convallis lacus feugiat condimentum. Aenean mauris nisi, pharetra quis
          luctus non, aliquam a eros.
        </p>
        <p>
          Phasellus a consectetur ipsum. Cras aliquam nulla vel orci cursus, ut
          varius massa iaculis. Integer pulvinar purus felis, quis consectetur
          tortor varius vitae. Nunc a sodales quam. Nunc sed justo viverra,
          facilisis massa id, imperdiet nulla. Morbi dui nisi, aliquet in mi in,
          volutpat condimentum risus. Pellentesque viverra interdum enim.
          Maecenas sodales posuere porttitor. Quisque malesuada ultricies augue,
          eget bibendum risus facilisis ac. Quisque metus metus, imperdiet quis
          vestibulum in, lacinia sit amet enim. Suspendisse sed nisi neque.
          Etiam iaculis lorem ac libero auctor, sit amet sollicitudin eros
          iaculis.
        </p>
      </Content>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: contentfulProjects(slug: { eq: $slug }) {
      title
      type
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
