import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Theme } from "../../theme";
import { StyledLayout, StyledContent, StyledMain } from "./layout.styled"
// import { StaticImage } from "gatsby-plugin-image"

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
            {/* <StaticImage
              className="bio-avatar"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../../images/profile-pic.png"
              width={150}
              height={150}
              quality={100}
              alt="Profile picture"
            /> */}
            {children}
          </StyledMain>
          <Footer author={author}/>
        </StyledContent>
      </StyledLayout>
    </Theme>
  )
}

export default Layout;
