import * as React from "react"
import styled from "styled-components"

import Seo from "../components/seo"

import { Layout } from "../components"

const Container = styled.section`
  font-size: 1.2rem;
`

const HomePage = () => {
  return (
    <Layout>
      <Container itemProp="articleBody">
        <h1>Howdy!</h1>

        <h2>I am a software developer and graduate student!</h2>

        <p>
          I develop software for <a href="https://ncar.ucar.edu/">NCAR</a> in
          the <a href="https://www2.acom.ucar.edu/">ACOM</a> division. I work on
          improving the code quality of various chemical models alongside many
          other wonderful software engineers and intelligent scientists.
        </p>

        <p>
          I've been a graduate student at Texas A&M pursuing a Master's in
          Atmospheric Science since January 2021. I study the application of
          machine learning to estimate air quality with satellite data under my
          advisors <a href="https://yangyangxu.weebly.com/">Dr. Yangyang Xu</a>{" "}
          and{" "}
          <a href="https://atmo.tamu.edu/people/profiles/faculty/yangping.html">
            Dr. Ping Yang
          </a>
          .
        </p>

        <p>
          After graduating with my bachelors in computer science in 2018, I
          joined <a href="https://capsher.com/">Capsher</a> as a software
          developer. My development and professional skills grew in my time
          there. I was extremely happy with my job and thoroughly enjoyed the
          people I worked with. However, my passion for climate science drove me
          to purse a Master's in Atmospheric Science so that I could contribute
          to positive, equitable climate mitigation and adaptation solutions. My
          work at NCAR supports scientists who do just that.
        </p>
      </Container>
    </Layout>
  )
}

export default HomePage

export const Head = () => <Seo />
