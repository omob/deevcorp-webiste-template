import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Logo } from "./header";
import logoImage from "../images/deevcorp-icon.png";

const SideNavWrapper = styled.div`
  width: 300px;
  height: 100%;
  position: fixed;
  z-index: 100000;
  background: -webkit-repeating-linear-gradient(
      50deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0) 1px
    ),
    -webkit-linear-gradient(#000, rgba(0, 0, 0, 0.1));
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-340px)"};
  transition: 0.7s;
  top: 0;
  bottom: 0;
  box-shadow: 0px 0px 38px 1px gray;

  @media (max-width: 550px) {
    & {
      width: 250px;
    }
  }

  @media screen and (max-height: 550px) {
    & {
      overflow: scroll;
    }
  }
`;

const NavWrapper = styled.nav`
  position: relative;
  height: 100%;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  padding: 20px;

  & > ul {
    li {
      font-size: 1.2em;
      text-transform: uppercase;
      list-style-type: none;
      margin-left: -39px;
      cursor: pointer;
      box-sizing: border-box;
      transition: 0.5s;
      margin-top: 30px;

      a {
        color: inherit;
        text-decoration: inherit;
        padding: 15px 15px 10px 25px;
        display: block;
      }
    }
    li:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

const LogoBg = styled.div`
  background: ${({ src }) => `url(${src}) center center no-repeat`};
  height: 250px;
  background-size: contain;
`;
const SideNav = ({ isOpen }) => {
  return (
    <SideNavWrapper isOpen={isOpen}>
      <LogoBg src={logoImage}></LogoBg>
      <NavWrapper>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/projects">Projects</Link>
          </li>

          <div id="navSocial">
            <a href="http://facebook.com/deevcorp">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="http://twitter.com/deevcorp">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="http://facebook.com/deevcorp">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </ul>
      </NavWrapper>
    </SideNavWrapper>
  );
};

export default SideNav;
