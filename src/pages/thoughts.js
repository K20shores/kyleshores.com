import React, { useState } from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/blog-card"
import styles from "./thoughts.module.scss"
import DatePicker from "react-datepicker"

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
}

function getBlogCards(data, filteredTags, filteredCategories, minDate, maxDate)
{
  return data.allMarkdownRemark.nodes
    .filter(a => {
        let include = true
        let published = new Date(a.frontmatter.published)
        if (filteredTags.length > 0)
        {
          const intersection = filteredTags.filter(e => a.frontmatter.tags.includes(e))
          include &= intersection.length > 0
        }
        if (filteredCategories.length > 0)
        {
          const intersection = filteredCategories.filter(e => a.frontmatter.categories.includes(e))
          include &= intersection.length > 0
        }
        if (minDate)
        {
          console.log("min", minDate, published, minDate <= published)
          include &= minDate <= published;
        }
        if (maxDate)
        {
          console.log("min", maxDate, published, maxDate >= published)
          include &= maxDate >= published;
        }
        return include
      })
    .map((a) => {return (<BlogCard key={a.id} {...a} />)})
}

function getTags(data, callBack, filteredTags, setFilteredTags) {
  let tags = []
  data.allMarkdownRemark.nodes.forEach((a) => tags.push(...a.frontmatter.tags))
  return tags.filter(onlyUnique).map((a,i) => { 
    let isActive = filteredTags.indexOf(a) >= 0
    return (
      <span 
        key={a} 
        className={`${styles.tag} ${isActive ? styles.activeTag : ''}`}
        role="button"
        tabIndex={i}
        onClick={(e) => callBack(filteredTags, e.target.textContent, setFilteredTags)} 
        onKeyDown={(e) => callBack(filteredTags, e.target.textContent, setFilteredTags)} 
        >
        {a}
      </span>
    )
  })
}

function getCategories(data, callBack, filteredCategories, setFilteredCategories) {
  let categories = []
  data.allMarkdownRemark.nodes.forEach((a) => categories.push(...a.frontmatter.categories))
  return categories.filter(onlyUnique).map((a,i) => {
    let isActive = filteredCategories.indexOf(a) >= 0
    return (
      <span 
        key={a} 
        className={`${styles.category} ${isActive ? styles.activeCategory : '' }`}
        role="button"
        tabIndex={i}
        onClick={(e) => callBack(filteredCategories, e.target.textContent, setFilteredCategories)} 
        onKeyDown={(e) => callBack(filteredCategories, e.target.textContent, setFilteredCategories)} 
        >
          {a}
      </span>
    ) 
  })
}

const addOrRemoveCallback = (arr, elem, set) => {
  if (arr.indexOf(elem) >= 0)
  {
    set(arr.filter(e => e !== elem))
  }
  else
  {
    set([...arr, elem])
  }
}

const formatDate= (date) => {
  if (date) return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, 0)}-${date.getDate()}`
  return '';
}

const Blog = ({data}) => {
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);
  const [minDate, setMinDate] = useState(null)
  const [maxDate, setMaxDate] = useState(null)
  console.log(minDate, maxDate)

  let blogCards = getBlogCards(data, filteredTags, filteredCategories, minDate, maxDate)
  let tags = getTags(data, addOrRemoveCallback, filteredTags, setFilteredTags)
  let categories = getCategories(data, addOrRemoveCallback, filteredCategories, setFilteredCategories)

  return (
    <Layout>
      <SEO title="Thoughts" />
      <div className={styles.container}>
        <section className={styles.header}>
          <h1>Thoughts</h1>
        </section>
        <section className={styles.tags}>
          <h3>Tags</h3>
          { tags }
        </section>
        <section className={styles.categories}>
          <h3>Categories</h3>
          { categories }
        </section>
        <section className={styles.date}>
          <h3>Date</h3>
          <input 
            value={formatDate(minDate)}
            className={styles.datepicker} 
            type="date" 
            onChange={(event) => setMinDate(event.target.value ? new Date(event.target.value) : null)}/>
          <input 
            value={formatDate(maxDate)}
            className={styles.datepicker} 
            type="date" 
            onChange={(event) => {console.log(event.target.value); setMaxDate(event.target.value ? new Date(event.target.value) : null)}}/>
        </section>
        <section className={styles.cards}>
        { blogCards }
        </section>
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
query {
  allMarkdownRemark(sort: {fields: frontmatter___published, order: DESC}) {
    totalCount
    nodes {
      frontmatter {
        author
        categories
        published(formatString: "MMM D, YYYY")
        tags
        title
      }
      timeToRead
      excerpt
      fields {
        slug
      }
      id
    }
  }
}
`