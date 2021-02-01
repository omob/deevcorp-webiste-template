import { Link,  } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image";

const ProjectImage = styled.div`
  margin-top: 2em;
`;

const ProjectLink = styled(Link)`
  position: relative;
  overflow: hidden;
  display: block;
  height: fit-content;
  padding: 20px;
  background-color: ${({ theme }) => theme.bodyBg};
  text-decoration: none !important;

  ${'' /* & {
    .gatsby-image-wrapper img {
      transition: 0.3s;
    }
  }

  &:hover {
    .gatsby-image-wrapper img {
      transform: scale(1.2);
    }
  } */}

  ${
    "" /* &:hover {
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
  } */
  }

  @media (min-width: 768px) {
    & {
      height: 500px;
    }
  }

  @media (min-width: 992px) {
    & {
      height: 600px;
    }
  }

  @media (min-width: 1280px) {
    & {
      height: 650px;
    }
  }

  ${
    "" /* @media (max-width: 550px) {
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
  } */
  }
`;

const ProjectTitle = styled.h4`
  color: ${({ theme }) => theme.text} !important;
  text-transform: capitalize;
  font-weight: 400;
  text-align: left;
  font-size: 26px;
  ${'' /* text-transform: uppercase; */}
  margin: 20px;
  font-family: "Montserrat";
  font-weight: 600;
  
  span {
    font-weight: 100;
    letter-spacing: 4px;
    display: block;
    font-size: 10px;
    margin-top: 10px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;


function Project({slug, image, title, type}) {
    return (
      <ProjectLink to={"projects/" + slug} key={slug}>
        <ProjectTitle>
          {title}
          <span>{type}</span>
        </ProjectTitle>
        <ProjectImage>
          <Img
            fluid={image}
            alt={title}
            fadeIn={true}
          />
        </ProjectImage>
      </ProjectLink>
    );
}

export default Project;