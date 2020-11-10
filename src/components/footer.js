import React from "react";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  text-align: center;
  padding: 2em;
  font-family: ;
  font-size: 18px;
`;

const SectionWrapper = styled.section`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 4em;
  padding-bottom: 4em;

  p {
    font-weight: 300;
  }
`;

const SectionTitle = styled.h2`
  font-size: 4em;
  text-align: center;

  @media (max-width: 768px) {
    & {
      font-size: 3em;
    }
  }
`;

const GetInTouch = styled(SectionWrapper)`
  p {
    font-size: 2em;
    width: 80%;
    margin: auto;
    text-align: center;
    line-height: 1.5em;
    span {
      color: gray;
      font-style: italic;

      a {
        color: inherit;
        transition: 0.5s ease;
      }

      a:hover {
        background-color: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.bodyBg};
      }
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.5em;
    }
  }
`;

const Footer = ({ siteTitle }) => {
  return (
    <>
      <GetInTouch>
        <SectionTitle>Get in Touch</SectionTitle>
        <p>
          You can reach us by sending us an email at
          <span>
            <a href="mailto:hello@deevcorp.com"> hello@deevcorp.com</a>
          </span>{" "}
          or call us on{" "}
          <span>
            <a href="tel:+2348153706096"> +234(0)8153706097</a>
          </span>
        </p>
      </GetInTouch>
      <FooterWrapper>
        © {new Date().getFullYear()} {siteTitle}.
      </FooterWrapper>
    </>
  );
};

export default Footer;
