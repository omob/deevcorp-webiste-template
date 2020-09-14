import React, { useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { GlobalStyles } from "./theme/global";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import ToggleThemeButton from "./toggle/toggle-theme";
import ToggleSidebarButton from "./toggle/toggle-sidebar";

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
