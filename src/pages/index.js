import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.scss"

const IndexPage = ({data}) => {
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
          <h3>Projects</h3>
          <p>
            I was heavily inspired by a post titled <a target="_" href="https://waitbutwhy.com/2014/05/life-weeks.html"> "Your Life in Weeks"</a> from <a target="_" href="https://waitbutwhy.com">waitbutwhy.com</a>
            to create a python package to help me make these life graphs. Don't worry, I asked for permssion before publishing the code.
          </p>
          <p>
            Here's my own life graph. Download the project from <a href="https://github.com/K20shores/Life-Graph">github</a> to make your own!
          </p>
          <Img fluid={data.lifegraph.childImageSharp.fluid} />
        </div>
        <div>
          <p>
            This site is still largely under construction, but I have plans for it. My goal is to create interactive pages
            for people to understand all aspects of climate change, from the carbon cycle earth's radiation budget. 
          </p>
          <p>
            I'm also going to use this site as a personal blog. Things that you can expect are me exploring financial independence,
            defining my personal philosophy (a mix of Aristotelianism and Stoicism), and anything else that pops into my mind, like most blogging sites.
          </p>
          <p>
            If you have any suggestions or any requests for parts of climate change that you'd like for me to prioritize, head on over to my <Link to="/contact">Contact</Link>
            page and drop me a note.
          </p>
          <hr/>
          <p>
            My life, odd as it may seem, has been and continues to be heavily influenced by this picture. I'll write more about that soon.
          </p>
          <Img fluid={data.stormyAtlantic.childImageSharp.fluid} />
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
      lifegraph: file(relativePath: {eq: "lifegraph.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stormyAtlantic: file(relativePath: {eq: "stormy-atlantic.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`