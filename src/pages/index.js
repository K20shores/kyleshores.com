import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import siteTheme from "../_theme.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1
        style={{
          fontSize: `4em`,
        }}
      >
        Kyle Shores
      </h1>
      <h2
        style={{
          color: siteTheme.headerGrey,
          maxWidth: `80%`,
        }}
      >
        Attempting to explain climate change and a little about myself to the
        world.
      </h2>
    </Layout>
  )
}

export default IndexPage
