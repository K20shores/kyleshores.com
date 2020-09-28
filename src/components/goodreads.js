import React, { useState } from "react"
import Spinner from "react-spinkit"

import styles from "./goodreads.module.css"

export default () => {
  const [loading, changeState] = useState(true)

  const width = 248
  const height = 340

  return (
    <div className={styles.centered}>
      {loading ? (
        <Spinner
          style={{
            position: "absolute",
            top: height * 0.45,
            left: width * 0.6,
            transform: `scale(1)`,
          }}
          name="ball-zig-zag"
          color="#00ad43"
          fadeIn={0}
        />
      ) : null}
      <iframe
        title="goodreads.com bookshelves"
        src="https://www.goodreads.com/widgets/user_update_widget?height=400&num_updates=3&user=103835854&width=250"
        width={`${width}`}
        height={`${height}`}
        onLoad={() => changeState(false)}
        onError={() => console.log("error")}
        frameBorder="0"
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
