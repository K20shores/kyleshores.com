import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Disqus } from "gatsby-plugin-disqus"
import { Layout } from "../components"
import Seo from "../components/seo"
import { themeData } from "../theme"

import styled from "styled-components"

const BlogNav = styled.nav`
  padding: 0 1rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
`

const BlogPostTemplate = ({ data, location, children }) => {
  const post = data.mdx
  const { previous, next } = data

  let disqusConfig = {
    url: `${data.site.siteMetadata.siteUrl + location.pathname}`,
    identifier: post.id,
    title: post.title,
  }

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <div>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </div>
        <GatsbyImage
          image={post.frontmatter.featuredImage.src.childImageSharp.gatsbyImageData}
          alt={post.frontmatter.featuredImage.alt}
          style={{
            borderRadius: "5%",
            border: `1px solid ${themeData.colors.accent}`,
          }}
        />
        <section itemProp="articleBody">{children}</section>
        <hr />
      </article>
      <Disqus config={disqusConfig} />
      <BlogNav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </BlogNav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date
        description
        featuredImage {
          alt
          src {
            childImageSharp {
              gatsbyImageData 
            }
          }
        }
        embeddedImages {
          id
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
