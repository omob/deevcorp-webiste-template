import React from "react";
import { animated, useSpring } from "react-spring";
import { Spring } from "react-spring/renderprops";
import Typing from "react-typing-animation";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  p {
    max-width: 900px;
    font-size: 1.8em;
    line-height: 1.7em;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.6em;
    }
  }

  @media (min-width: 2000px) {
    & {
      h2 {
        font-size: 8em;
      }
      p {
        font-size: 2.5em;
        max-width: 70%;
      }
    }
  }
`;
const HeaderH2 = styled.h2`
  font-size: 7em;
  font-weight: 900;
  @media (max-width: 768px) {
    & {
      font-size: 5em;
      font-weight: bolder;
    }
  }
`;
const AboutWrapper = styled.div`
  p {
    span {
      text-decoration: underline;
      font-style: italic;
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.bodyBg};
      transition: 0.2s ease-in;
    }
    span:hover {
      background-color: ${({ theme }) => theme.bodyBg};
      color: gray;
    }
  }
`;

const HeadingSection = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <HeaderWrapper>
      <HeaderH2>
        <Typing loop={false}  startDelay={50}>
          <span>We Design</span>
          <Typing.Backspace count={20}  delay={2000} />
          We Build
          <Typing.Backspace count={20} delay={2000} />
          We Deliver
          <Typing.Backspace count={20} delay={1000} />
          <span>We Design</span>
        </Typing>
      </HeaderH2>
      <AboutWrapper>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 2000, delay: 1000 }}
        >
          {props => (
            <animated.p style={props}>
              At DeevCorp Digital Agency, we create <span>simple</span>, yet{" "}
              <span>professional </span> websites and applications using modern
              design trends and technology.
            </animated.p>
          )}
        </Spring>
      </AboutWrapper>
    </HeaderWrapper>
  );
};

export default HeadingSection;
