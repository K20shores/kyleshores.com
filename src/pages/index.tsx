import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.scss"
import ThoughtCard from "../components/thought-card"
import Carousel from "../components/carousel"
// import siteTheme from "../_theme.scss"

const IndexPage = ({ data }) => {
  const projects = data.dataJson.projects
  let cards = data.posts.edges.map(a => {
    return <ThoughtCard key={a.node.id} {...a.node} />
  })
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className={styles.title}> {data.site.siteMetadata.title} </h1>
      <h2 className={styles.subtitle}>
        Attempting to explain climate change and a little about myself to the
        world.
      </h2>
      <div className={styles.content}>
        <div style={{ marginBottom: `2rem` }}>
          <h2>Projects</h2>
          <Carousel data={projects} />
        </div>
        <div>
          <h2>Recent Thoughts</h2>
          <div className={styles.cards}>{cards}</div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    dataJson {
      projects {
        alt
        description
        link
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    posts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
      limit: 5
    ) {
      edges {
        node {
          frontmatter {
            author
            categories
            date(formatString: "MMM DD, YYYY")
            tags
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
          timeToRead
          excerpt
          fields {
            slug
          }
          id
        }
      }
      totalCount
    }
  }
`
