import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import videoSrc from "../assets/video/demo.mp4";
import Layout from "../components/layout";
import ProjectsWrapper from "../components/projects";
import SEO from "../components/seo";
// import playBackButton from "../images/videoBtn.png"
import Clients from "../components/clients";

import HeadingSection from "../components/heading-section";
import { animated } from "react-spring";
import { Spring } from "react-spring/renderprops";
const ContainerWrapper = styled.section``;

export const HeaderTitle = styled.h2`
  font-size: 6em;
  @media (max-width: 768px) {
    & {
      font-size: 5em;
    }
  }
`;
export const SectionWrapper = styled.section`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 4em;
  padding-bottom: 4em;

  p {
    font-weight: 300;
  }
`;
export const SectionTitle = styled(HeaderTitle)`
  font-size: 4em;
  text-align: center;

  @media (max-width: 768px) {
    & {
      font-size: 3em;
    }
  }
`;

const SectionOne = styled(SectionWrapper)`
  padding-top: 7em;
  padding-bottom: 5em;
`;

const SectionTwo = styled(SectionWrapper)`
  background: ${({ theme }) => theme.bgGradient};
  background-size: cover;
  height: 600px;

  @media (max-width: 768px) {
    &,
    & > div {
      height: fit-content;
      width: 100%;
    }
  }
`;

const VideoWrapper = styled.div`
  box-shadow: 2px 2px 10px #2c2c2c;
  width: 80%;
  margin: auto;
  margin-top: 5em;
  max-width: 600px;
  height: 300px;
  position: relative;

  video {
    width: 100%;
    height: auto;
  }
`;

const SectionThree = styled(SectionWrapper)``;

const Button = styled.button`
  margin-top: 1em;
  width: 120px;
  padding: 4px 10px;
  font-size: 14px;
  text-transform: uppercase;
  ${({ theme }) => theme.button};
  border-width: 3px;
  float: right;
  transition: 0.3s;
  outline: none;
  &:focus {
    border: none;
  }
`;

const PortfolioBtn = styled(Button)``;

const SectionFour = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.bodyBg};
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContainerWrapper>
      <SectionOne>
        <HeadingSection></HeadingSection>
      </SectionOne>
      <Spring
        from={{ opacity: 0, transform: "translateY(250px)" }}
        to={{ opacity: 1, transform: "tranlateY(0)" }}
        config={{ duration: 1000, delay: 2000 }}
      >
        {props => (
          <animated.div style={props}>
            <SectionTwo>
              <SectionTitle>We Innovate</SectionTitle>
              <VideoWrapper>
                <video controls>
                  <source src={videoSrc}></source>
                  <track kind="captions" srcLang="en" />
                </video>
                {/* <PlayButton /> */}
              </VideoWrapper>
            </SectionTwo>
          </animated.div>
        )}
      </Spring>

      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 2000, delay: 5000 }}
      >
        {props => (
          <animated.div style={props}>
            <SectionThree>
              <SectionTitle>Portfolio</SectionTitle>
              <ProjectsWrapper></ProjectsWrapper>
              <Link to="/">
                <PortfolioBtn>Portfolios</PortfolioBtn>{" "}
              </Link>
            </SectionThree>
          </animated.div>
        )}
      </Spring>
      <SectionFour>
        <SectionTitle>Trusted Clients</SectionTitle>
        <Clients></Clients>
      </SectionFour>
    </ContainerWrapper>
  </Layout>
);

export default IndexPage;
