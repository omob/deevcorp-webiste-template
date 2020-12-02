import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import Typing from "react-typing-animation";
import { Spring } from "react-spring/renderprops";
// import { Spring } from "react-spring/renderprops"

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
        <Typing loop={false} speed={100} startDelay={50}>
          <span>We Design</span>
          <Typing.Backspace count={20} delay={100} speed={200} />
          We Build
          <Typing.Backspace count={20} delay={100} />
          Result Oriented
          <Typing.Backspace count={20} delay={1000} />
          {/* <Typing.Reset count={1} delay={500} /> */}
          <span>We Design</span>
        </Typing>
      </HeaderH2>
      <AboutWrapper>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 2000, delay: 2000 }}
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

      {/* <Spring
        from={{
          width: 100,
          padding: 0,
          background: "linear-gradient(to right, #30e8bf, #ff8235)",
          transform: "translate3d(400px,0,0) scale(2) rotateX(90deg)",
          boxShadow: "0px 100px 150px -10px #2D3747",
          borderBottom: "0px solid white",
          shape: "M20,380 L380,380 L380,380 L200,20 L20,380 Z",
          textShadow: "0px 5px 0px white",
          transitionDuration: "3s",
        }}
        to={{
          width: "auto",
          padding: 20,
          background: "linear-gradient(to right, #009fff, #ec2f4b)",
          transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
          boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.4)",
          borderBottom: "10px solid #2D3747",
          shape: "M20,20 L20,380 L380,380 L380,20 L20,20 Z",
          textShadow: "0px 5px 15px rgba(255,255,255,0.5)",
        }}
      >
        {props => <h2 style={props}>Hello</h2>} 
      </Spring>*/}
    </HeaderWrapper>
  );
};

export default HeadingSection;
