import * as React from "react"
import { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby"

import { Theme, themeData } from "../../theme";
import { StyledLayout, StyledContent, StyledMain } from "./layout.styled"

import { Header, Footer } from "."

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

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

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
