import React from "react";
import styled from "styled-components";
import Button from "./button";
import ContactForm from "./contactForm";
import sendMessageSvg from "../images/icons/send-message.svg";
import { useState } from "react";
import { animated } from "react-spring";
import { Spring } from "react-spring/renderprops";

export const FooterWrapper = styled.footer`
         text-align: center;
         padding: 2em;

         p {
           font-weight: 300;
           font-size: 18px;
         }
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

const buttonStyle = {
  backgroundColor: "#fff",
  padding: "5px",
  width: "50px",
  height: "50px",
  borderRadius: "50px",
  borderWidth: "0px",
  boxShadow: "rgb(255 255 255) 1px 1px 3px 2px",
  alignitems: "center",
  display: "flex",
  flexDirection: "column-reverse",
  position: "absolute",
  right: "10%",
};

const ContactFormModal = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bodyBg};
  transition: 0.5s;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Footer = ({ siteTitle }) => {

  const [showContactForm, setShowContactForm] = useState(false);

  const handleModalClose = () => {

  }

  const AnimatedContactFormModal = animated(ContactFormModal);

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
            <a href="tel:+23488808144"> +234(0)88808144</a>,
            <a href="tel:+2348153706096"> +234(0)8153706096</a>, 
            <a href="tel:+447721715756"> +44(0)7721715756 </a>
          </span>
        </p>

        <Button style={buttonStyle} onClick={() => setShowContactForm(true)}>
          <img
            style={{ margin: 0 }}
            height={35}
            width={40}
            src={sendMessageSvg}
            alt="Send Message"
          ></img>
        </Button>
      </GetInTouch>

      {/* {showContactForm && ( */}
      <Spring
        from={{ opacity: 0, height: 0 }}
        to={
          showContactForm
            ? { opacity: 1, height: window.innerHeight }
            : { opacity: 0, height: 0 }
        }
        config={{ duration: 300 }}
      >
        {props => (
          <AnimatedContactFormModal style={props}>
            <Button
              title="X"
              style={{ fontWeight: "bolder" }}
              onClick={() => setShowContactForm(false)}
            />
            <ContactForm></ContactForm>
          </AnimatedContactFormModal>
        )}
      </Spring>
      {/* )} */}

      <FooterWrapper>
        <p>
          © {new Date().getFullYear()} {siteTitle}.
        </p>
      </FooterWrapper>
    </>
  );
};


export default Footer;
