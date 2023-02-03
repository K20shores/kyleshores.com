import * as React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components"
import Seo from "../components/seo"

const Research = ({ data }) => {
  let content = data.allMarkdownRemark.nodes[0]
  return (
    <Layout >
      <Seo title="Research interets of Kyle Shores" />
      <div>
        <section dangerouslySetInnerHTML={{ __html: content.html }}
          itemProp="articleBody"
        />
      </div>
    </Layout>
  )
}

export default Research

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
          filter: { fileAbsolutePath: {regex : "\/pages/research/"} },
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
