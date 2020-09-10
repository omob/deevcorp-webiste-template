import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const SectionWrapper = styled.section`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 4em;
  padding-bottom: 4em;

  p {
    font-weight: 300;
    font-size: 1.5em;
    line-height: 1.7em;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.26em;
    }
  }
`;

const HeaderBanner = styled(SectionWrapper)`
  min-height: 400px;
  height: fit-content;
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
`;
const Content = styled(SectionWrapper)`
  height: contain;
  background-color: ${({ theme }) => theme.bodyBg};
`;

const BreadCrumbs = styled.div`
  color: gray;
  font-weight: 300;
  font-size: 1em;
  position: relative;
  top: 20px;
  a {
    color: inherit;
    transition: 0.5s ease;
  }

  a:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.bodyBg};
  }
  @media (min-width: 768px) {
    & {
      font-size: 1.3em;
    }
  }
`;

const ProjectTemplate = ({ data: { project } }) => {
  const filteredResponse = [];

  if (project.info !== null) {
    const { content } = project.info;

    const result = content.map(x => {
      const textImagePlaceHolder = {};
      if (x.content[0] && x.content[0].value !== "") {
        textImagePlaceHolder.text = x.content[0].value;
      }
      if (x.data.target && x.data.target.fields.file.en_US.url) {
        textImagePlaceHolder.image = x.data.target.fields.file.en_US.url;
      }

      return [{ ...textImagePlaceHolder }];
    });

    filteredResponse.push(
      ...result.filter(x => x !== undefined && x.length > 0).flat()
    );
  }

  return (
    <Layout>
      <HeaderBanner>
        <h1>{project.title}</h1>
        <p>{project.type}</p>
        <BreadCrumbs>
          <Link to="/">Home</Link> {">"} <Link to="/projects"> Projects </Link>
          {">"} {project.title}
        </BreadCrumbs>
      </HeaderBanner>
      <Content>
        {filteredResponse.map(({ text, image }) => (
          <>
            {text && <p>{text}</p>}
            {image && <img src={image} alt={project.title} />}
          </>
        ))}
        {filteredResponse.length === 0 && (
          <p>No content at this time. Check back later</p>
        )}
      </Content>
    </Layout>
  );
};

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
      info {
        content {
          content {
            value
          }
          data {
            target {
              fields {
                file {
                  en_US {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default ProjectTemplate;
