import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.scss"
import ThoughtCard from "../components/thought-card"
import Carousel from "../components/carousel"
import ICarousel from "../components/carousel"
import projects from "../data/projects.json" 
// import siteTheme from "../_theme.scss"

const IndexPage = ({ data }) => {
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
        <div>
          <Carousel data={projects}/>
        </div>
        {/* <div>
          <h3>Projects</h3>
          <p>
            I was heavily inspired by a post titled{" "}
            <a target="_" href="https://waitbutwhy.com/2014/05/life-weeks.html">
              {" "}
              "Your Life in Weeks"
            </a>{" "}
            from{" "}
            <a target="_" href="https://waitbutwhy.com">
              waitbutwhy.com
            </a>
            to create a python package to help me make these life graphs. Don't
            worry, I asked for permssion before publishing the code.
          </p>
          <p>
            Here's my own life graph. Download the project from{" "}
            <a href="https://github.com/K20shores/Life-Graph">github</a> to make
            your own!
          </p>
          <Img fluid={data.lifegraph.childImageSharp.fluid} />
          <h4>
            <a href="https://themannerlydog.com">The Mannerly Dog</a>
          </h4>
          <p>
            I manage a WordPress website for a Houston area animal behaviorist
            who specializes in dog trianing.
          </p>
        </div> */}
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
    lifegraph: file(relativePath: { eq: "lifegraph.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
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
