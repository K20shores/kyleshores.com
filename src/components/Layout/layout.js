import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Theme, themeData } from "../../theme";
import { StyledLayout, StyledContent, StyledMain } from "./layout.styled"

import { Header, Footer } from "."

import { useScreenWidth } from "../../hooks"

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
          version
        }
      }
    }
  `)

  let width = useScreenWidth();

  const author = data.site.siteMetadata?.author

  return (
    <Theme>
      <StyledLayout>
        <Header desktop={isDesktop(width)}/>
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