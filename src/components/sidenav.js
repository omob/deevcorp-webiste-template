import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Logo } from "./header";

const SideNavWrapper = styled.div`
  width: 300px;
  height: 100%;
  position: fixed;
  z-index: 100000;
  color: #000;
  ${
    "" /* background: -webkit-repeating-linear-gradient(50deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, 0) 1px), -webkit-linear-gradient(#000, rgba(0, 0, 0, .1)); */
  }
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-340px)"} ;
  background-color: #fff;
  transition: 0.7s;
  top: 0;
  bottom: 0;
  padding: 20px;
  box-shadow: 0px 0px 38px 1px gray;
`;

const NavWrapper = styled.nav`
  position: relative;
  top: 200px;
  height: 100%;

  & > ul {
    li {
      font-size: 1.8em;
      padding: 15px 15px 20px 25px;
      font-weight: bold;
      text-transform: uppercase;
      list-style-type: none;
      margin-left: -39px;
      cursor: pointer;
      box-sizing: border-box;
      transition: 0.5s;
      margin-top: 30px;

      a {
        color: inherit;
      }
    }
  }
`;
const SideNav = ({ isOpen }) => {
  return (
    <SideNavWrapper isOpen={isOpen}>
      {/* <Logo style={{ width: "100%", position: "absolute", left: 0 }}></Logo> */}
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
