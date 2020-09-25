import React from "react"

import styles from "./goodreads.module.css"

export default () => {
  return (
    <div className={styles.centered}>
      <iframe
        title="goodreads.com bookshelves"
        src="https://www.goodreads.com/widgets/user_update_widget?height=400&num_updates=3&user=103835854&width=250"
        width="248"
        height="340"
        frameborder="0"
      ></iframe>
      <a href="https://www.goodreads.com/">
        <img
          alt="Goodreads: Book reviews, recommendations, and discussion"
          rel="nofollow"
          src="https://www.goodreads.com/images/layout/goodreads_logo_140.png"
        />
      </a>
    </div>
  )
}
