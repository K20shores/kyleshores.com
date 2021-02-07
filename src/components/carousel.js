import React, { useState } from "react"

import { v4 as uuidv4 } from "uuid"
import styles from "./carousel.module.scss"
import Img from "gatsby-image"

const Slide = ({
  link,
  activeSlide,
  number,
  image,
  alt,
  description,
  totalSlides,
  maxHeight,
}) => {
  return (
    <a
      href={link}
      className={`${styles.mySlides} ${
        activeSlide === number && styles.active
      }`}
    >
      <div className={styles.numbertext}>
        {number + 1} / {totalSlides}
      </div>
      <div className={styles.image}>
        <Img
          fluid={image?.childImageSharp?.fluid}
          alt={alt}
          style={{ maxHeight: maxHeight }}
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.caption}>{description}</div>
    </a>
  )
}

const Dot = ({ number, activeSlide, setActiveSlide }) => {
  return (
    <span
      className={`${styles.dot} ${activeSlide === number ? styles.active : ""}`}
      onClick={() => setActiveSlide(number)}
      onKeyDown={() => setActiveSlide(number)}
      role="button"
      aria-label={`Go to project ${number}`}
      tabIndex={0}
    ></span>
  )
}

export default props => {
  const [activeSlide, setActiveSlide] = useState(0)
  const maxHeight = props.maxHeight || `300px`

  let slides = props.data.map((a, idx) => {
    return (
      <Slide
        key={uuidv4()}
        {...a}
        number={idx}
        activeSlide={activeSlide}
        totalSlides={props.data.length}
        maxHeight={maxHeight}
      />
    )
  })

  let dots = props.data.map((a, idx) => {
    return (
      <Dot
        key={uuidv4()}
        number={idx}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
    )
  })

  const previousSlide = () => {
    // activeSlide > 0 && setActiveSlide(activeSlide - 1)
    setActiveSlide((activeSlide - 1) % slides.length)
  }

  const nextSlide = () => {
    // activeSlide < slides.length - 1 && setActiveSlide(activeSlide + 1)
    setActiveSlide((activeSlide + 1) % slides.length)
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.slideshowContainer}>
        {slides}
        <span
          className={styles.prev}
          onClick={previousSlide}
          onKeyDown={previousSlide}
          role="button"
          aria-label="go to next project"
          tabIndex={0}
        >
          &#10094;
        </span>
        <span
          className={styles.next}
          onClick={nextSlide}
          onKeyDown={nextSlide}
          role="button"
          aria-label="go to next project"
          tabIndex={0}
        >
          &#10095;
        </span>
      </div>
      <div className={styles.dots}>{dots}</div>
    </div>
  )
}