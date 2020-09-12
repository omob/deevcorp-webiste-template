import React, { useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { GlobalStyles } from "./theme/global";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import ToggleButton from "./toggle/toggle";
import Footer from "./footer";
import SideNav from "./sidenav";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [theme, setTheme] = useState("dark");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleMenuBarToggle = isToggled => {
    setIsSidebarOpen(isToggled);
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header
          siteTitle={data.site.siteMetadata.title}
          onToggled={handleMenuBarToggle}
        />
        <SideNav isOpen={isSidebarOpen}></SideNav>
        <ToggleButton toggleTheme={toggleTheme}></ToggleButton>
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title}></Footer>
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
