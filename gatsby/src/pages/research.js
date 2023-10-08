import * as React from "react"

import { Layout } from "../components"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const Research = () => {
  return (
    <Layout>
      <h1>Machine learning and Air Quality</h1>

      <h2>Model Comparison</h2>

      <StaticImage 
        src="../../static/images/densities-with-test-set-scores.png"
        alt="PDF of estimated PM2.5 values"
      />

      <p>
        I focus on the use of machine learning to estimate a harmful component
        of air quality: particulate matter smaller than 2.5 micrometers, or PM
        <sub>2.5</sub>. The first part of my research has focused on comparing
        several machine learning algorithms when estimating ground level PM
        <sub>2.5</sub> concentrations. Why? Well, because my advisor told me to
        for one, but also because you have to start somewhere in grad school.
        This allowed me to learn many, many machine learning algorithms. And, it
        was kinda fun.
      </p>

      <p>
        This was all done with data from{" "}
        <a href="https://gmao.gsfc.nasa.gov/reanalysis/MERRA-2/">MERRA-2</a>,
        using synthetic data, the most important component of which was the
        simulated aerosol optical depth, or AOD. We focused on 10 years of data,
        but only over Texas.
      </p>

      <h2>But now more focused and using real data</h2>

      <p>
        My second year of research is now focusing on doing a more targeted
        comparison, but for the entire United States and using data from{" "}
        <a href="https://www.goes-r.gov/multimedia/dataAndImageryImagesGoes-16.html">
          GOES-16
        </a>
        . This is ongoing.
      </p>
    </Layout>
  )
}

export default Research

export const Head = () => <Seo title="Research interests of Kyle Shores" />
