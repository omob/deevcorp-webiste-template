import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
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

const Header = ({ siteTitle }) => {
  return (
    <HeaderWrapper>
      <NavBar>
        <Link to="/">
          <Logo src={logoImage} alt={siteTitle} />
        </Link>
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
