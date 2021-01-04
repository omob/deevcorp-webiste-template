import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./footer";
import Header from "./header";
import SideNav from "./sidenav";
import { GlobalStyles } from "./theme/global";
import { darkTheme, lightTheme } from "./theme/theme";
import ToggleSidebarButton from "./toggle/toggle-sidebar";
import ToggleThemeButton from "./toggle/toggle-theme";
import storage from "./storage-layer";
import { useEffect } from "react";
import uiTheme from "./theme/uiTheme";

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

  const [theme, setTheme] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const loadTheme = () => {
    const storedTheme = storage.getTheme();
    if(!storedTheme) return setTheme(uiTheme.DARK);

    setTheme(storedTheme);
  }

  useEffect(() => {
    loadTheme();
  }, [])

  const toggleTheme = () => {
    if (theme === uiTheme.LIGHT) {
      setTheme(uiTheme.DARK);
      storage.save(uiTheme.DARK)
    } else {
      setTheme(uiTheme.LIGHT);
      storage.save(uiTheme.LIGHT);
    }
  };

  const handleMenuBarToggle = isToggled => {
    setIsSidebarOpen(isToggled);
  };
  return (
    <ThemeProvider theme={theme === uiTheme.LIGHT ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />

        <>
          <ToggleSidebarButton
            onToggled={handleMenuBarToggle}
            closeButton={!isSidebarOpen}
          ></ToggleSidebarButton>
          <SideNav isOpen={isSidebarOpen}></SideNav>
        </>
        <ToggleThemeButton toggleTheme={toggleTheme}></ToggleThemeButton>
        <main onClick={() => (isSidebarOpen ? setIsSidebarOpen(false) : null)}>
          {children}
        </main>
        <Footer siteTitle={data.site.siteMetadata.title}></Footer>
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
