import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { Layout, Seo } from "../components"
import { themeData } from "../theme"

import heroBackground from "../../static/images/stormy-atlantic-background.webp"

const HeroContainer = styled.section`
  background-image: url(${heroBackground});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`

const HeroText = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.6);

  h1 {
    margin-top: 0;
    color: var(--color-tetrad-1);
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
    color: var(--color-primary);
  }
`

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroText>
        <h1>Exploring Science and Code</h1>
        <p>
          Welcome to my corner of the web, where I share insights, discoveries,
          and personal projects in the world of science and programming.
        </p>
      </HeroText>
    </HeroContainer>
  )
}

const BioContainer = styled.section`
  display: flex;
  flex-direction: column;
`

const BioIntro = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
  p {
    flex: 3;
    margin: auto;
    width: 100%;
  }
`

const BioSection = () => {
  return (
    <BioContainer>
      <h1>Howdy!</h1>
      <BioIntro>
        <p>
          Hey there, I'm Kyle Shores, a passionate explorer of the realms where
          code meets climate. With a Bachelor's in Computer Science and a
          Master's in Atmospheric Sciences, acquired under the guidance of my
          mentors
          <a href="https://yangyangxu.weebly.com/">Dr. Yangyang Xu</a> and
          <a href="https://atmo.tamu.edu/people/profiles/faculty/yangping.html">
            Dr. Ping Yang
          </a>
          , I've embarked on a unique journey in the world of technology and
          environmental science.
        </p>
        <div style={{ flex: `1`, display: `flex`, justifyContent: `center` }}>
          <figure>
            <StaticImage
              src="../../static/images/profile-pic.jpg"
              alt="Kyle and Luna"
              style={{
                borderRadius: "100%",
                border: `1px solid ${themeData.colors.accent}`,
              }}
            />
            <figcaption style={{ textAlign: `center`, fontSize: `0.7rem` }}>
              Me with my wonderful cat, Luna.
            </figcaption>
          </figure>
        </div>
      </BioIntro>
      <p>
        By day, I'm a software developer at the National Center for Atmospheric
        Research (<a href="https://ncar.ucar.edu/">NCAR</a>), where I'm part of
        the Atmospheric Chemistry Observations and Modeling (
        <a href="https://www2.acom.ucar.edu/">ACOM</a>) lab. It's here that I
        support scientists by writing software to aid their research aimed at
        understanding our planet's complex atmospheric chemistry in weather and
        climate.
      </p>
      <p>
        But my mission doesn't stop at the lab door. I'm on a mission to make a
        positive impact on climate change and foster a deeper understanding of
        software engineering, scientific programming, and the art of data
        visualization.
      </p>
      <p>
        So, welcome to my digital haven, where I blend my expertise in coding
        with my passion for climate science. Here, I serve up a unique blend of
        insights and ideas. I'm all about breaking down complex concepts into
        bite-sized, easy-to-digest nuggets of knowledge.
      </p>
      <p>
        Through my blog, I strive to make climate change accessible to everyone,
        offering not only a clear understanding of the science but also
        practical steps we can all take. But I'm not stopping at climate
        science; I'll sprinkle in some software engineering wisdom and other
        intriguing hobbies I dabble in.
      </p>
      <p>
        My content is tailored for citizen scientists, the technically curious,
        and anyone who dares to explore the intersection of science and code.
        Expect to find fun, interactive graphics that unravel the mysteries of
        our world, all wrapped up in a friendly yet slightly sassy tone. After
        all, isn't life a mix of inspiration and a touch of nihilistic humor?
      </p>
      <p>
        Join me in this adventure as we unravel the wonders of our world, one
        line of code and one climate insight at a time. Together, we'll navigate
        the complex and the curious with a dash of wit and a commitment to
        making a real impact.
      </p>
      <p>Let's embark on this journey together. Shall we?</p>
    </BioContainer>
  )
}

const PortfolioSection = () => {
  return <h1>Portfolio</h1>
}

const BlogSection = () => {
  return <h1>Blogs</h1>
}

const HomePage = () => {
  return (
    <Layout padding="0">
      <HeroSection />
      <div style={{ padding: "0 10%" }}>
        <BioSection />
        <BlogSection />
        <PortfolioSection />
      </div>
    </Layout>
  )
}

export default HomePage

export const Head = () => <Seo />
