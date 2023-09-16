import * as React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components';

import Seo from "../components/seo"

import { Layout } from "../components"

const Container = styled.section`
  font-size: 1.2rem;
`

const HomePage = ({ data, children }) => {
  let content = data.allMarkdownRemark.nodes[0]
  return (
    <Layout>
      <Container itemProp="articleBody">
        {children}
      </Container>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
          filter: { fileAbsolutePath: {regex : "\/pages/index/"} },
      ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
export const Head = () => (
  <Seo />
)