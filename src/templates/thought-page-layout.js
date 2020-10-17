import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql} from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const shortcodes = { Link, Image }

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <h1>{mdx.frontmatter.title}</h1>
      <Img 
          fluid={mdx.frontmatter.featuredimage.src.childImageSharp.fluid}
          alt={mdx.frontmatter.featuredimage.altj}
          />
      <MDXProvider components={shortcodes}>
        <MDXRenderer {...mdx}>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        featuredimage {
          alt
          src {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`