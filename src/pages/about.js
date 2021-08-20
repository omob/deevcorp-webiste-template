import React from "react";
import styled from "styled-components";
import { HeaderTitle, SectionWrapper, SectionTitle } from ".";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from 'gatsby';




  const HeaderSection = styled(SectionWrapper)``;

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
        max-width: 90%;
      }
    }

    span {
      font-style: italic;
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.bodyBg};
      transition: 0.2s ease-in;
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

    @media (min-width: 1200px) {
      padding: 2em;
    }
  `;

  const ServicesSection = styled(SectionWrapper)`
    p {
      display: inline-grid;
      width: 100%;
      height: 200px;
      padding: 1em;
      border: 1px dashed;
      border-color: ${({ theme }) => theme.text};
      border-left: 10px solid;
      margin: 20px 10px;
      transition: 0.4s;
      max-width: 400px;
      align-content: center;
    }

    a { color: inherit; text-decoration: none; }

    p:hover {
      transform: translate(-20px);
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.bodyBg};
    }

    @media (min-width: 1700px) {
      p:nth-child(odd) {
         transform: translateY(-10px); 
        background-color: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.bodyBg};
      }
      p:nth-child(even) {
        transform: translateY(20px);}
      }
    }

    @media (min-width: 992px) {
      p:hover {
        transform: translateY(-20px);
      }
    }
  `;

  const CallToAction = styled(SectionWrapper)`
    width: 80%;
    margin: auto;
    max-width: 1200px;
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    padding: 40px;
    text-align: center;

    p {
      font-size: 1.5em;
      line-height: 1.2em;
      font-weight: normal;
    }

    @media (max-width: 550px) {
      & {
        p {
          line-height: 1.3em;
          font-size: 25px;
        }
      }
    }

    @media (min-width: 768px) {
      & {
        p {
          line-height: 1.3em;
          font-size: 2em;
        }
      }
    }

    @media (min-width: 1200px) {
      & {
        p {
          font-size: 2.5em;
          line-height: 1.4em;
        }
      }
    }
  `;

  const CultureSection = styled(SectionWrapper)`
    background-color: ${({ theme }) => theme.bodyBg};
  `;

    const AboutSection = styled(SectionWrapper)`
      background-color: ${({ theme }) => theme.bodyBg};
    `;

const About = () => {

  const services = [
    "Website Design and Development",
    "Software Solutions Development",
    "User Interface & User Experience Design ",
    "Mobile Application Development",
    "Branding",
  ];

  return (
    <Layout>
      <SEO
        title="About"
        description="About DeevCorp Digital Agency, History, Services and Culture"
      />
      <>
        <HeaderSection style={{ marginTop: "4em" }}>
          <HeadingText>
            Our team consist of experienced and certified developers who are{" "}
            <span>dedicated</span> and <span>passionate</span> about technology
            and latest design trends.
          </HeadingText>
        </HeaderSection>
        <Space></Space>
        <AboutSection>
          <SectionTitle style={{ textAlign: "left" }}>About US</SectionTitle>
          <Text>
            At DeevCorp Digital Agency, we adopt cutting edge technology in Web
            Development, Mobile Application Development, and Software
            Development to render distinct services to our Clients. We are a
            team of young and talented individuals driven by a passion to
            deliver top-notch services to Client's satisfaction.
          </Text>
        </AboutSection>
        {/* <HistorySection id="history">
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
        </HistorySection> */}
        <ServicesSection id="services">
          <SectionTitle style={{ textAlign: "left" }}>Services</SectionTitle>
          <>
            {services.map(service => (
              <Link to="/projects">
                <Text>{service}</Text>
              </Link>
            ))}
          </>
        </ServicesSection>
        <Space></Space>
        <CallToAction>
          <Text>
            DeevCorp Digital Agency is focused on helping startups and
            established brands bring their ideas to life using design and
            technology.
          </Text>
        </CallToAction>
        <Space></Space>
        {/* <CultureSection id="culture">
          <SectionTitle style={{ textAlign: "left" }}>Culture</SectionTitle>
          <Text>
            Franzen hell of mustache lo-fi banh mi locavore occupy roof party af
            subway tile +1 sriracha bicycle rights. Whatever keytar 8-bit migas
            live-edge letterpress. Typewriter hoodie adaptogen microdosing
            prism. Quinoa poke readymade roof party lo-fi vinyl humblebrag fanny
            pack lomo bitters literally before they sold out. Organic lomo
            viral, kitsch hammock hella woke cloud bread farm-to-table kombucha
            umami man bun tilde fashion axe.
          </Text>
        </CultureSection> */}
      </>
    </Layout>
  );
};

export default About;
