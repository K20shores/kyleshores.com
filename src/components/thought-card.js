import React from "react"
import { Link } from "gatsby"

import styles from "./thought-card.module.scss"

export default props => {
  return (
    <Link to={`/${props.fields.slug}`} className={styles.card}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{props.frontmatter.title}</h2>
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
