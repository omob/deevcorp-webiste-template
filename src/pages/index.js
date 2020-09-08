import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import videoSrc from "../assets/video/demo.mp4"
import Layout from "../components/layout"
import ProjectsWrapper from "../components/projects"
import SEO from "../components/seo"

// import playBackButton from "../images/videoBtn.png"
import Clients from "../components/clients"

const ContainerWrapper = styled.section``

const HeaderTitle = styled.h2`
  font-size: 6em;
  @media (max-width: 768px) {
    & {
      font-size: 5em;
    }
  }
`
const SectionWrapper = styled.section`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 4em;
  padding-bottom: 4em;

  p {
    font-weight: 300;
  }
`
const SectionTitle = styled(HeaderTitle)`
  font-size: 4em;
  text-align: center;

  @media (max-width: 768px) {
    & {
      font-size: 3em;
    }
  }
`

const SectionOne = styled(SectionWrapper)`
  padding-top: 7em;
  padding-bottom: 5em;

  p {
    max-width: 800px;
    font-size: 1.5em;
    line-height: 1.7em;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.26em;
    }
  }

  @media (min-width: 2000px) {
    & {
      h2 {
        font-size: 7em;
      }
      p {
        font-size: 2em;
        max-width: 70%;
      }
    }
  }
`

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
`

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
`
// const PlayButton = styled.button`
//   background: url(${playBackButton}) center center no-repeat;
//   background-size: cover;
//   height: 70px;
//   width: 70px;
//   outline: none;
//   border: none;
//   box-shadow: 0px 0px 10px #020202;
//   border-radius: 100%;
//   margin: auto;
//   cursor: pointer;
//   position: absolute;
//   left: 47%;
//   top: 40%;

//   &:focus {
//     box-shadow: 0px 0px 10px #fafafa;
//   }
// `

const SectionThree = styled(SectionWrapper)``

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
  &: hover {

  }
`

const PortfolioBtn = styled(Button)``

const SectionFour = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.bodyBg};
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContainerWrapper>
      <SectionOne>
        <HeaderTitle>We Create</HeaderTitle>
        <div>
          <p>
            At <span>DEEVCORP DIGITAL AGENCY</span> we create simple, yet
            professional websites and applications using modern design trends
            and technology.
          </p>
        </div>
      </SectionOne>
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
      <SectionThree>
        <SectionTitle>Portfolio</SectionTitle>
        <ProjectsWrapper></ProjectsWrapper>
        <Link to="/">
          <PortfolioBtn>Portfolios</PortfolioBtn>{" "}
        </Link>
      </SectionThree>
      <SectionFour>
        <SectionTitle>Trusted Clients</SectionTitle>
        <Clients></Clients>
      </SectionFour>
    </ContainerWrapper>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
