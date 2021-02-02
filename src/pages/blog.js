import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/blog-card"
import styles from "./blog.module.scss"
// import DatePicker from "react-datepicker"

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index
}

const notNullOrEmpty = (value, index, self) => {
  if (value) {
    return true
  }
  return false
}

function getCards(data, filteredTags, filteredCategories, minDate, maxDate) {
  return data.allMdx.edges
    .filter(a => {
      let include = true
      let date = new Date(a.node.frontmatter.date)
      if (filteredTags.length > 0) {
        const intersection = filteredTags.filter(e =>
          a.node.frontmatter.tags.includes(e)
        )
        include &= intersection.length > 0
      }
      if (filteredCategories.length > 0) {
        const intersection = filteredCategories.filter(e =>
          a.node.frontmatter.categories.includes(e)
        )
        include &= intersection.length > 0
      }
      if (minDate) {
        include &= minDate <= date
      }
      if (maxDate) {
        include &= maxDate >= date
      }
      return include
    })
    .map(a => {
      return <BlogCard key={a.node.id} {...a.node} />
    })
}

function getTags(data, callBack, filteredTags, setFilteredTags) {
  let tags = []
  data.allMdx.edges.forEach(a => tags.push(...a.node.frontmatter.tags))
  return tags
    .filter(onlyUnique)
    .filter(notNullOrEmpty)
    .map((a, i) => {
      let isActive = filteredTags.indexOf(a) >= 0
      return (
        <span
          key={a}
          className={`${styles.tag} ${isActive ? styles.activeTag : ""}`}
          role="button"
          tabIndex={i}
          onClick={e =>
            callBack(filteredTags, e.target.textContent, setFilteredTags)
          }
          onKeyDown={e =>
            callBack(filteredTags, e.target.textContent, setFilteredTags)
          }
        >
          {a}
        </span>
      )
    })
}

function getCategories(
  data,
  callBack,
  filteredCategories,
  setFilteredCategories
) {
  let categories = []
  data.allMdx.edges.forEach(a =>
    categories.push(...a.node.frontmatter.categories)
  )
  return categories
    .filter(onlyUnique)
    .filter(notNullOrEmpty)
    .map((a, i) => {
      let isActive = filteredCategories.indexOf(a) >= 0
      return (
        <span
          key={a}
          className={`${styles.category} ${
            isActive ? styles.activeCategory : ""
          }`}
          role="button"
          tabIndex={i}
          onClick={e =>
            callBack(
              filteredCategories,
              e.target.textContent,
              setFilteredCategories
            )
          }
          onKeyDown={e =>
            callBack(
              filteredCategories,
              e.target.textContent,
              setFilteredCategories
            )
          }
        >
          {a}
        </span>
      )
    })
}

const addOrRemoveCallback = (arr, elem, set) => {
  if (arr.indexOf(elem) >= 0) {
    set(arr.filter(e => e !== elem))
  } else {
    set([...arr, elem])
  }
}

const Blog = ({ data }) => {
  const [filteredCategories, setFilteredCategories] = useState([])
  const [filteredTags, setFilteredTags] = useState([])
  // const [minDate, setMinDate] = useState(null)
  // const [maxDate, setMaxDate] = useState(null)

  let blogCards = getCards(
    data,
    filteredTags,
    filteredCategories,
    null,
    null
  )
  let tags = getTags(data, addOrRemoveCallback, filteredTags, setFilteredTags)
  let categories = getCategories(
    data,
    addOrRemoveCallback,
    filteredCategories,
    setFilteredCategories
  )

  return (
    <Layout>
      <SEO title="Blog" />
      <div className={styles.container}>
        <section className={styles.header}>
          <h1>Blog</h1>
          <p>
            It's a blog. However, I don't like the word blog so I call them
            blog. They will probalby end up being about only a few very
            specific things, but they have the potential to be about anything.
          </p>
        </section>
        <section className={styles.tags}>
          <h3>Tags</h3>
          {tags}
        </section>
        <section className={styles.categories}>
          <h3>Categories</h3>
          {categories}
        </section>
        {/* <section className={styles.date}>
          <h3>Date</h3>
          <DatePicker 
            isClearable
            selected={minDate} 
            onChange={date => setMinDate(date)} /
          >
          <DatePicker 
            isClearable
            selected={maxDate} 
            onChange={date => setMaxDate(date)} /
          >
        </section> */}
        <section className={styles.cards}>{blogCards}</section>
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          frontmatter {
            author
            categories
            date(formatString: "MMM DD, YYYY")
            tags
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
          timeToRead
          excerpt
          fields {
            slug
          }
          id
        }
      }
      totalCount
    }
  }
`
