import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

import playBackButton from "../images/videoBtn.png"
import videoSrc from "../assets/video/demo.mp4"

const ContainerWrapper = styled.section`
  display: grid;
`

const HeaderTitle = styled.h2`
  font-size: 72px;
`
const SectionWrapper = styled.section`
  padding-left: 10%;
  padding-right 10%;
  padding-top: 2em;
`
const SectionTitle = styled(HeaderTitle)`
  font-size: 46px;
  text-align: center;
`

const SectionOne = styled(SectionWrapper)`
  align-self: center;
  padding-top: 7em;
  padding-bottom: 5em;

  p {
    max-width: 600px;
  }
`

const SectionTwo = styled(SectionWrapper)`
  background: ${({ theme }) => theme.bgImage};
  background-size: cover;
  height: 600px;
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
    </ContainerWrapper>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
