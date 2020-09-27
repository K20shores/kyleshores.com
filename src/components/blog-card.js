import React from "react"
import { Link } from "gatsby"

import styles from "./blog-card.module.scss"

export default (props) => {
    return (
        <Link to={props.fields.slug} className={styles.card}>
            <div className={styles.container} >
                <div className={styles.header}>
                    {props.frontmatter.title}
                </div>
                <div className={styles.metadata}>
                    <span className={styles.published}>
                        {props.frontmatter.published}
                    </span>
                    <span className={styles.timeToRead} >
                        {props.timeToRead} minutes
                    </span>
                </div>
                <div className={styles.excerpt}>
                    {props.excerpt}
                </div>
            </div>
        </Link>
    )
}