import React from "react";
import { func } from "prop-types";
import styled from "styled-components";
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import moonIcon from "../../images/icons/moon.svg";
import sunIcon from "../../images/icons/sun.svg";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.2rem;
  position: relative;
  width: 3rem;
  height: 2rem;
  position: fixed;
  right: 1em;
  top: 40%;
  z-index: 999999;

  img {
    height: auto;
    width: 1.2rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ theme: { theme } }) =>
        theme === "light" ? "translateY(0)" : "translateY(100px)"};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ theme: { theme } }) =>
        theme === "light" ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;

const ToggleThemeButton = ({ theme, toggleTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme}>
      <img src={moonIcon} alt="dark" />
      <img src={sunIcon} alt="light" />
    </ToggleContainer>
  );
};

ToggleThemeButton.propTypes = {
  toggleTheme: func.isRequired,
};

export default ToggleThemeButton;
