import React, { useState, useEffect } from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import styles from "./thought-page-layout.module.scss"

const shortcodes = { Link, Image }

const ToToCId = id => {
  if (id.startsWith(`#`)) {
    return `${id.slice(1)}-toc`
  }
  return `${id}-toc`
}

const getLinks = (items, activeId) => {
  if (!items) return <></>
  return (
    <ul>
      {items.map(item => (
        <li id={ToToCId(item.url)} key={item.url}>
          <a
            style={
              activeId === item.url.slice(1)
                ? { filter: `brightness(1.5)` }
                : null
            }
            href={item.url}
          >
            {item.title}
          </a>
          {getLinks(item.items, activeId)}
        </li>
      ))}
    </ul>
  )
}

const CloneAndReverse = arr => [...arr].reverse()

const getUrls = toc => {
  if (!toc.items) return []

  let stack = []
  let urls = []
  stack.push(...CloneAndReverse(toc.items))

  while (stack.length > 0) {
    let item = stack.pop()
    urls.push(item.url.slice(1))
    item.items && stack.push(...CloneAndReverse(item.items))
  }

  return urls
}

const TableOfContents = mdx => {
  let itemIds = getUrls(mdx.tableOfContents)
  const [activeId, setActiveId] = useState(``)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        let front = entries.filter(a => a.isIntersecting).shift()
        if (!front && entries.length === 1) front = entries.shift()
        front && setActiveId(front.target.id)
      },
      {
        threshold: 1.0,
        root: null,
      }
    )

    itemIds.forEach(id => {
      observer.observe(document.getElementById(id))
    })

    return () => {
      itemIds.forEach(id => {
        observer.unobserve(document.getElementById(id))
      })
    }
  }, [itemIds])

  return (
    <nav className={styles.tableOfContents}>
      {getLinks(mdx.tableOfContents.items, activeId)}
    </nav>
  )
}

const ThoughtHeader = mdx => {
  return (
    <div style={{ marginBottom: `1rem` }}>
      <h1>{mdx.frontmatter.title}</h1>
      <div className={styles.thoughtSubtitle}>
        <span>{mdx.frontmatter.date}</span>
        <span>{mdx.timeToRead} minutes</span>
      </div>
      <Img
        fluid={mdx.frontmatter.featuredimage.src.childImageSharp.fluid}
        alt={mdx.frontmatter.featuredimage.altj}
      />
    </div>
  )
}

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout marginLeft={`0`} marginRight={`0`}>
      <SEO title={mdx.frontmatter.title} />
      <TableOfContents {...mdx}></TableOfContents>
      <div className={styles.thought}>
        <ThoughtHeader {...mdx}></ThoughtHeader>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      tableOfContents
      timeToRead
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        title
        featuredimage {
          alt
          src {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
