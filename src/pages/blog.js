import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/blog-card"

const Blog = ({data}) => {
  let blogCards = data.allMarkdownRemark.nodes.map((a) => {return (<BlogCard key={a.id} {...a} />)})
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      { blogCards }
    </Layout>
  )
}

export default Blog

export const query = graphql`
query {
  allMarkdownRemark(sort: {fields: frontmatter___published, order: DESC}) {
    totalCount
    nodes {
      frontmatter {
        author
        categories
        published(formatString: "MMM. D, YYYY")
        tags
        title
      }
      timeToRead
      excerpt
      fields {
        slug
      }
      id
    }
  }
}
`