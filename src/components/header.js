import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "../styles/header.module.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, marginBottom: `0` }}>
    <Link 
      to={props.to}
      className={styles.link}
    >
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `90%`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        className={styles.link}
      >
        {siteTitle}
      </Link>
      <ul style={{ listStyle: `none`, float: `right`, marginBottom: `0`}}>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
