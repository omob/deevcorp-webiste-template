import React, { useState } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./theme/theme"
import { GlobalStyles } from "./theme/global"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import ToggleButton from "./toggle/toggle"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <ToggleButton toggleTheme={toggleTheme}></ToggleButton>
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title}></Footer>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
