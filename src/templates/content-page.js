import * as React from "react"
import { Link, graphql } from "gatsby"

import { Layout } from "../components"
import Seo from "../components/seo"

import styled from 'styled-components';

const ContentPageTemplate = ({ data, location, children }) => {
  const post = data.mdx

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      {children}
    </Layout>
  )
}

export default ContentPageTemplate

export const pageQuery = graphql`
  query ContentPageBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      id
    }
  }
`
