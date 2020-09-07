import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import videoSrc from "../assets/video/demo.mp4"
import Layout from "../components/layout"
import ProjectsWrapper from "../components/projects"
import SEO from "../components/seo"
// clients logo
import stillEarthLogo from "../images/clients/sel.png"
import playBackButton from "../images/videoBtn.png"

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
  padding-right 10%;
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
`

const SectionTwo = styled(SectionWrapper)`
  background: ${({ theme }) => theme.bgImage};
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
const PlayButton = styled.button`
  background: url(${playBackButton}) center center no-repeat;
  background-size: cover;
  height: 70px;
  width: 70px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 10px #020202;
  border-radius: 100%;
  margin: auto;
  cursor: pointer;
  position: absolute;
  left: 47%;
  top: 40%;

  &:focus {
    box-shadow: 0px 0px 10px #fafafa;
  }
`

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
const ClientsWrapper = styled.div`
  padding-top: 4em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  max-width: 90%;
  margin: auto;
`
const Client = styled.div`
  padding: 10px 20px;
  width: content;
  display: grid;
  align-items: center;
  gap: 10px;
  border: 2px solid gray;

  p {
    font-size: 20px;
    line-height: 1em;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    & {
      width: content;
      grid-template-columns: auto;

      p {
        font-size: 18px;
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContainerWrapper>
      <SectionOne>
        <HeaderTitle>We Create</HeaderTitle>
        <div>
          <p>
            <span>DEEVCORP DIGITAL AGENCY</span> dolor sit amet, consectetur
            adipiscing elit. Nulla imperdiet dolor a tortor blandit interdum a
            sed elit. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus
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
      {/* <SectionFour>
        <SectionTitle>Trusted Clients</SectionTitle>
        <ClientsWrapper>
          <Client>
            <img src={stillEarthLogo} alt="" />
            <p>Still Earth Construction & Realty</p>
          </Client>
          <Client>
            <img src={stillEarthLogo} alt="" />
            <p>BoldTouch Interiors & Designs</p>
          </Client>
          <Client>
            <img src="" alt="" />
            <p>Paul Usoro & Co</p>
          </Client>
        </ClientsWrapper>
      </SectionFour> */}
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
