import { navigate } from "gatsby";
import React, { useRef, useState } from "react";
import { animated } from "react-spring";
import { Spring } from "react-spring/renderprops";
import styled from "styled-components";
import videoSrc from "../assets/video/demo.mp4";
import Button from "../components/button";
import Clients from "../components/clients";
import HeadingSection from "../components/heading-section";
import Layout from "../components/layout";
import PlayButton from "../components/playButton";
import ProjectsWrapper from "../components/projects";
import SEO from "../components/seo";

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
    & div {
      height: fit-content;
      width: 100%;
    }
  }
`;

const VideoWrapper = styled.div`
  box-shadow: 2px 2px 10px #2c2c2c;
  margin: auto;
  margin-top: 5em;
  max-width: 600px;
  height: 300px;
  position: relative;
  video {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
`;

const SectionThree = styled(SectionWrapper)`
  text-align: center;
`;

const SectionFour = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.bodyBg};
`;

const IndexPage = () => {
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef(null);

  const handleVideoPlay = () => {
    videoRef.current.play();
    videoRef.current.setAttribute("controls", true);
    setShowPlayButton(false);
  };

  const handleVideoStatusChange = () => {
    setShowPlayButton(true);
    videoRef.current.removeAttribute("controls");
  };

  return (
    <Layout>
      <SEO title="Home" />
      <ContainerWrapper>
        <SectionOne>
          <HeadingSection></HeadingSection>
        </SectionOne>

        <SectionTwo>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ duration: 1000, delay: 2000 }}
          >
            {props => (
              <animated.div style={props}>
                <SectionTitle>We Innovate</SectionTitle>
                <VideoWrapper>
                  <video
                    onEnded={handleVideoStatusChange}
                    onPause={handleVideoStatusChange}
                    ref={videoRef}
                  >
                    <source src={videoSrc}></source>
                    <track kind="captions" srcLang="en" />
                  </video>
                  {showPlayButton && <PlayButton onPress={handleVideoPlay} />}
                </VideoWrapper>
              </animated.div>
            )}
          </Spring>
        </SectionTwo>

        <Spring
          from={{ opacity: 0, transform: "translateY(250px)" }}
          to={{ opacity: 1, transform: "tranlateY(0)" }}
          config={{ duration: 500, delay: 4000 }}
        >
          {props => (
            <animated.div style={props}>
              <SectionThree>
                <SectionTitle>Portfolio</SectionTitle>
                <ProjectsWrapper></ProjectsWrapper>
                <Button
                  style={{ marginTop: "5em" }}
                  title="View All"
                  onClick={() => navigate("/projects")}
                />
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
};

export default IndexPage;
