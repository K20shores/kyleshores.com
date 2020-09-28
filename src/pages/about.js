import React from "react"

import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./about.module.css"

const About = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About</h1>
      <div className={styles.container}>
        <Img fluid={data.file.childImageSharp.fluid} />
        <div>
          <h2>Background</h2>
          <p>
            Hi! I'm just another biped attempting to do something useful with my
            life. I grew up in Pasadena, Texas. I graduated from Texas A&M in
            2018 with a bachelor in computer science and now I work at Capsher
            Technology in College Station, Texas.
          </p>
          <h2>Hobbies</h2>
          <ul>
            <li> Cast iron cooking and restore </li>
            <li> Reading </li>
            <li> Programming </li>
            <li> Camping and hiking </li>
            <li> Dance (mostly ballroom and west coast swing) </li>
          </ul>
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

export default About
