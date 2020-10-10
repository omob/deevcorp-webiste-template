import React from "react";
import styled, { keyframes } from "styled-components";

const pulsate1 = keyframes`
0% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 1;
    box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75), 0px 0px 25px 10px rgba(255, 255, 255, 0.75);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
    box-shadow: none;

  }
`;
const PlayButtonWrapper = styled.a`
  & {
    width: 80px;
    height: 80px;
    background: radial-gradient(#333333 60%, rgba(255, 255, 255, 1) 62%);
    border-radius: 50%;
    position: absolute;
    display: block;
    top: 45%;
    left: 43%;
    box-shadow: 0px 0px 25px 3px rgb(0 0 0 / 80%);
  }

  @media (max-width: 550px) {
    & {
      width: 50px;
      height: 50px;
      top: 35%;
    }

    &::after {
      border-top: 10px solid transparent !important;
      border-bottom: 10px solid transparent !important;
      border-left: 15px solid #fff !important;
    }
  }
  @media (max-width: 768px) {
    & {
      top: 38% !important;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-40%) translateY(-50%);
    transform: translateX(-40%) translateY(-50%);
    transform-origin: center center;
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-bottom: 13px solid transparent;
    border-left: 20px solid #fff;
    z-index: 100;
    -webkit-transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  &::before {
    content: "";
    position: absolute;
    width: 150%;
    height: 150%;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-animation: ${pulsate1} 2s;
    animation: ${pulsate1} 2s;
    -webkit-animation-direction: forwards;
    animation-direction: forwards;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: steps;
    animation-timing-function: steps;
    opacity: 1;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, 0.75);
    top: -26%;
    left: -26%;
    background: rgba(198, 16, 0, 0);
  }
`;

const PlayButton = ({ onPress }) => {
  return <PlayButtonWrapper onClick={onPress}></PlayButtonWrapper>;
};

export default PlayButton;
