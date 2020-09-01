/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./theme/theme"
import { GlobalStyles } from "./theme/global"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import ToggleButton from "./toggle/toggle"

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

        {/* <ToggleButton theme={theme} toggleTheme={toggleTheme}></ToggleButton>
         */}

        <ToggleButton toggleTheme={toggleTheme}></ToggleButton>

        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
