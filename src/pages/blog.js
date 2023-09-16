import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';

import { Layout } from "../components"
import Seo from "../components/seo"

const PostList = styled.ol`
  list-style: none;
`

const BlogIndex = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <h1>Blog</h1>
      <PostList>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt || post.frontmatter.description,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </PostList>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: {fields: {slug: {regex: "\\/blog/"}}}
      sort: {frontmatter: {date: DESC}}
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          date
        }
      }
    }
  }
`

export const Head = () => (
  <Seo title="All posts"/>
)