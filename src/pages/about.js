import React from "react";
import styled from "styled-components";
import { HeaderTitle, SectionWrapper, SectionTitle } from ".";
import Layout from "../components/layout";
import SEO from "../components/seo";
const About = () => {
  const HeaderSection = styled(SectionWrapper)`
    ${"" /* background-color: ${({ theme }) => theme.bodyBg}; */}
  `;
  const HeadingText = styled.h2`
    font-size: 2em;
    text-align: center;
    margin: auto;
    font-weight: normal;
    line-height: 1.3em;

    @media (min-width: 550px) {
      & {
        font-size: 3em;
        line-height: 1.2em;
      }
    }
    @media (min-width: 992px) {
      & {
        font-size: 4em;
      }
    }
    @media (min-width: 1500px) {
      & {
        font-size: 5em;
      }
    }

    span {
      font-style: italic;
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.bodyBg};
      transition: 0.2s ease-in;
    }
    span:hover {
      background-color: ${({ theme }) => theme.bodyBg};
      color: gray;
    }
  `;
  const HistorySection = styled(SectionWrapper)`
    background-color: ${({ theme }) => theme.bodyBg};
  `;
  const Text = styled.p`
    font-weight: 300;
    font-size: 1.6em;
    line-height: 1.7em;

    @media (max-width: 768px) {
      & {
        font-size: 1.36em;
      }
    }

    @media (min-width: 1400px) {
      & {
        font-size: 1.9em;
      }
    }
  `;

  const Space = styled.div`
    padding: 1.5em;
  `;

  const ServicesSection = styled(SectionWrapper)`
    p {
      display: inline-block;
      width: fit-content;
      padding: 1em;
      border: 1px dashed;
      border-color: ${({ theme }) => theme.text};
      margin: 10px;
      transition: 0.4s;
      max-width: 400px;
    }

    p:hover {
      transform: translate(-20px);
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.bodyBg};
    }

    @media (min-width: 1700px) {
      p:nth-child(odd) {
        transform: translateY(-20px);
        background-color: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.bodyBg};
      }
      p:nth-child(even) {
        transform: translateY(30px);
      }
    }

    @media (min-width: 992px) {
      p:hover {
        transform: translateY(-20px);
      }
    }
  `;

  const services = [
    "Website Design and Development",
    "Software Solutions Development",
    "User Interface & User Experience Design ",
    "Mobile Application Development",
  ];

  return (
    <Layout>
      <SEO title="About" />
      <>
        <HeaderSection style={{ marginTop: "4em" }}>
          <HeadingText>
            Our team consist of experienced and certified developers who are{" "}
            <span>dedicated</span> and <span>passionate</span> about technology
            and latest design trends.
          </HeadingText>
        </HeaderSection>
        <Space></Space>
        <HistorySection>
          <SectionTitle style={{ textAlign: "left" }}>History</SectionTitle>
          <Text>
            I'm baby farm-to-table +1 umami, hell of meditation shoreditch
            asymmetrical polaroid kitsch bicycle rights hexagon. Direct trade
            butcher chia glossier small batch aesthetic. Copper mug pinterest
            mustache coloring book edison bulb. Pinterest gluten-free
            farm-to-table hexagon trust fund hashtag. Synth squid palo santo
            shaman heirloom. Mumblecore single-origin coffee pok pok gochujang
            lomo enamel pin kale chips asymmetrical truffaut jean shorts blue
            bottle cronut iceland. Organic seitan poutine sartorial normcore.
          </Text>
          <Text>
            Franzen hell of mustache lo-fi banh mi locavore occupy roof party af
            subway tile +1 sriracha bicycle rights. Whatever keytar 8-bit migas
            live-edge letterpress. Typewriter hoodie adaptogen microdosing
            prism. Quinoa poke readymade roof party lo-fi vinyl humblebrag fanny
            pack lomo bitters literally before they sold out. Organic lomo
            viral, kitsch hammock hella woke cloud bread farm-to-table kombucha
            umami man bun tilde fashion axe.
          </Text>
        </HistorySection>
        <ServicesSection>
          <SectionTitle style={{ textAlign: "left" }}>Services</SectionTitle>
          <>
            {services.map(service => (
              <Text>{service}</Text>
            ))}
          </>
        </ServicesSection>
      </>
    </Layout>
  );
};

export default About;
