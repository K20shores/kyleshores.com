require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    title: `Kyle Shores`,
    author: {
      name: `Kyle Shores`,
    },
    version: '1.0.0',
    description: `My personal site to explore ideas and market myself`,
    siteUrl: `https://kyleshores.com`,
    social: {
      linkedin: `shoreskyle`,
      orcid: `0000-0002-4272-5187`,
      github: `k20shores`,
      googlescholar: `t1Si6MYAAAAJ`,
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
          trackingIds: [
              process.env.GA_MEASUREMENT_ID,
          ],
          gtagConfig: {
              optimize_id: 'OPT_CONTAINER_ID',
              anonymize_ip: true,
              cookie_expires: 0,
          },
          pluginConfig: {
              head: true,
              respectDNT: true,
          },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kyle Shores personal website`,
        short_name: `KyleShores`,
        start_url: `/`,
        background_color: "#ffffff",
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: "#00ad43",
        display: `minimal-ui`,
        icon: `static/images/ks-icon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: `kyleshores-com`
      }
    },
  ],
}
