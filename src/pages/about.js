import React from "react"

import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/about.module.css"

const SecondPage = ({ data }) => {
    console.log(data)
    return (
    <Layout>
      <SEO title="About" />
      <h1>About</h1>
      <div className={styles.container}>
        <Img fluid={data.file.childImageSharp.fluid} />
        <div>
          <p>
            Hi! I'm just another biped attempting to do something useful with my life. I grew up in Pasadena, Texas.
            I graduated from Texas A&M in 2018 with a bachelor in computer science.
          </p>
          <p>
            As you can see from my shirt in the picture, I work at Capsher Technology. It's a neat little software consulting firm in College Station, Texas.
          </p>
          <p>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "kyle.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SecondPage
