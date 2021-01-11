import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';




const ProjectImage = styled(BackgroundImage)`
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
  ${"" /* background-color: ${({ theme }) => theme.body}; */}

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
  ${"" /* color: ${({ theme }) => theme.text} !important; */}
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


function Project({slug, image, title, type}) {
    return (
      <ProjectLink to={"projects/" + slug} key={slug}>
        <ProjectImage Tag="section" fluid={image}></ProjectImage>
        <ProjectTitle>
          {title}
          <span>{type}</span>
        </ProjectTitle>
      </ProjectLink>
    );
}

export default Project;