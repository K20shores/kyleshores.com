import * as React from "react"
import { graphql } from "gatsby"
import * as styles from "./index.module.scss"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HomePage = ({ data }) => {
  let content = data.allMarkdownRemark.nodes[0]
  return (
    <Layout>
      <Seo title="Kyle Shores" />
      <div className={styles.content}>
        <section dangerouslySetInnerHTML={{ __html: content.html }}
          itemProp="articleBody"
        />
      </div>
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
