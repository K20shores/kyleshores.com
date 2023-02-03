import * as React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components';

import Seo from "../components/seo"

import { Layout } from "../components"

const Container = styled.section`
  font-size: 1.2rem;
`

const HomePage = ({ data }) => {
  let content = data.allMarkdownRemark.nodes[0]
  return (
    <Layout>
      <Seo title="Kyle Shores" />
      <Container dangerouslySetInnerHTML={{__html: content.html}} itemProp="articleBody" />
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
    allMarkdownRemark(
          filter: { fileAbsolutePath: {regex : "\/pages/index/"} },
      ) {
      nodes {
        excerpt
        html
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
