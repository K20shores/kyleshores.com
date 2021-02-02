import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./blog-card.module.scss"

export default props => {
  return (
    <Link to={`/${props.fields.slug}`} className={styles.card}>
      <Img
        fluid={props.frontmatter.featuredimage.src.childImageSharp.fluid}
        alt={props.frontmatter.featuredimage.altj}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          opacity: 0.1,
          zIndex: -1,
        }}
      />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{props.frontmatter.title}</h2>
        </div>
        <div className={styles.metadata}>
          <span className={styles.date}>{props.frontmatter.date}</span>
          <span className={styles.timeToRead}>{props.timeToRead} minutes</span>
        </div>
        <div className={styles.excerpt}>{props.excerpt}</div>
      </div>
    </Link>
  )
}
