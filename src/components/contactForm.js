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
      // <FormWrapper>
      //   <form
      //     name="contact"
      //     netlify
      //   >
      //     <input type="hidden" name="form-name" value="contact" />
      //     <p>
      //       <input
      //         className="form-control"
      //         type="text"
      //         name="name"
      //         placeholder="Your Name"
      //       />
      //     </p>
      //     <p>
      //       <input
      //         className="form-control"
      //         type="email"
      //         name="email"
      //         placeholder="Your Email"
      //       />
      //     </p>
      //     <p>
      //       <textarea
      //         rows="5"
      //         className="form-control"
      //         name="message"
      //         placeholder="Enter Message"
      //       ></textarea>
      //     </p>
      //     <p style={{ textAlign: "right" }}>
      //       <Button style={{ width: "150px" }} title="Send" type="submit" />
      //     </p>
      //   </form>
      // </FormWrapper>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{" "}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
}

export default ContactForm;