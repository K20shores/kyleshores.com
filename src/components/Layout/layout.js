import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Theme, themeData } from "../../theme";
import { StyledLayout, StyledContent, StyledMain } from "./layout.styled"

import { Header, Footer } from "."

import { useScreenWidth } from "../../hooks"

const isMobile = function(width) {
  return width <= themeData.breakpoints.mobile;
}

const isTablet = function(width) {
  return (width > themeData.breakpoints.mobile) && (width <= themeData.breakpoints.tablet);
}

const isDesktop = function(width) {
  return width > themeData.breakpoints.tablet;
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  let width = useScreenWidth();

  console.log(width, isMobile(width), isTablet(width), isDesktop(width));

  const author = data.site.siteMetadata?.author

  return (
    <Theme>
      <StyledLayout>
        <Header author={author}/>
        <StyledContent>
          <StyledMain>
            {children}
          </StyledMain>
          <Footer author={author}/>
        </StyledContent>
      </StyledLayout>
    </Theme>
  )
}

export default Layout;
