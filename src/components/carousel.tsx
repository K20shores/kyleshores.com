import React from "react"

import styles from "./carousel.module.scss"

export interface ICarousel {
  image: string
  description: string,
  link: string,
  title: string
}

interface props {
  data: ICarousel[]
}

const Slide = (data: ICarousel) => 
{
  console.log(data)
  return (
    <div className={styles.mySlides}>
      {/* <div className={styles.numbertext}></div> */}
      <img src={data.image} style={{width: `100%`}}/>
      <div className={styles.text}>{data.description}</div>
    </div>
  )
}

const Carousel = (props: props) => {
  let slides = props.data.map(a => {
    return <Slide {...a} />
  })
  return (
    <div className={styles.slideshowContainer}>
      {slides}
      <a className={styles.prev}>&#10094;</a>
      <a className={styles.next}>&#10095;</a>
    </div>
    )
}

export default Carousel