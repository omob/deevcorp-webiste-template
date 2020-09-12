import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import logoImage from "../images/deevcorp-icon.png";

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.body};
  position: relative;
`;

const NavBar = styled.nav`
  margin: 0 auto;
  max-width: 1280px;
  padding: 10px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  height: 80px;
`;
const Logo = styled.img`
  height: 85px;
  width: auto;
`;

const NavButton = styled.button.attrs(props => ({
  className: props.className,
}))`
  width: 50px;
  height: 45px;
  background: 0 0;
  border: none;
  padding-left: 10px;
  z-index: 1000;
  transition: 0.7s;
  outline: 0;
  justify-self: end;
  margin-top: 12px;
  position: relative;

  & > span {
      height: 4px;
      content: "-";
      background-color: #b5b5b5;
      display: block;
      margin: 6px 4px 8px -2px;
      width: 35px;
      outline: 0;
    }
  }

  .top-bar, .bottom-bar {
    transition: .1s
  }
  &.toggled {
    .top-bar {
      transform: rotate(45deg);
      transform-origin: -8% 90%;
    }
    .bottom-bar {
        transform: rotate(-45deg);
        transform-origin: 10% 90%;
    }
    .middle-bar {
      opacity: 0
    }
  }

`;

const Header = ({ siteTitle, onToggled }) => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    onToggled(!isToggled);
    setToggled(!isToggled);
  };

  return (
    <HeaderWrapper>
      <NavBar>
        <Link to="/">
          <Logo src={logoImage} alt={siteTitle} />
        </Link>
        <NavButton
          className={isToggled ? "toggled" : null}
          onClick={handleToggle}
        >
          <span className="top-bar"></span>
          <span className="middle-bar"></span>
          <span className="bottom-bar"></span>
        </NavButton>
      </NavBar>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
