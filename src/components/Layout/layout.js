import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Social } from "../"
import { Theme } from "../../theme";
import { StyledLayout, StyledHeader, StyledContent, StyledMain, StyledFooter, StyledHeaderContent } from "./layout.styled"

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
        <StyledHeader>
          <StyledHeaderContent>
            <Link to="/">
            <StaticImage
              className="bio-avatar"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../../images/profile-pic.png"
              width={150}
              height={150}
              quality={100}
              alt="Profile picture"
            />
            </Link>
            <hr/>
            <Link to="/">
              <h1>
                {author.name}
              </h1>
            </Link>
            <Social/>
            <ul >
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/thoughts">
                  Thoughts
                </Link>
              </li>
              <li>
                <Link to="/research">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/store">
                  Store
                </Link>
              </li>
            </ul>
          </StyledHeaderContent>
        </StyledHeader>
        <StyledContent>
          <StyledMain>
            {children}
          </StyledMain>
          <StyledFooter>
            <div className='social'>
              <Social/>
            </div>
            <div className='copyright'>
              © {new Date().getFullYear()} {author?.name}, Built with&nbsp;<a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a>
            </div>
          </StyledFooter>
        </StyledContent>
      </StyledLayout>
    </Theme>
  )
}

export default Layout;
