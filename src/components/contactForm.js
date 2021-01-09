import React from 'react';
import styled from "styled-components";
import Button from './button';

const FormWrapper = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  & {
    form {
      width: 80%;
      max-width: 800px;
    }

    input.form-control,
    textarea.form-control {
      border-radius: 10px;
      border: 0;
      padding: 15px;
      width: 100%;
      font-weight: 100;
      font-size: 1.5em;
      transition: 0.3s;
      opacity: 0.9;
    }

    input.form-control:hover,
    textarea.form-control:hover {
      opacity: 1;
    }
  }
`;
function ContactForm(props) {
    return (
      <FormWrapper>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netflify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Your Name"
            />
          </p>
          <p>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </p>
          <p>
            <textarea
              rows="5"
              className="form-control"
              name="message"
              placeholder="Enter Message"
            ></textarea>
          </p>
          <p style={{ textAlign: "right" }}>
            <Button style={{ width: "150px" }} title="Send" type="submit" />
          </p>
        </form>
      </FormWrapper>
    );
}

export default ContactForm;