import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Theme } from "../../theme";
import { StyledLayout, StyledContent, StyledMain } from "./layout.styled"

import { Header, Footer } from "."

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
