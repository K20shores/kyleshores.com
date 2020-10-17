import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import styles from "./layout.module.scss"

const Layout = ({ children, contentWidth }) => {
  let width = contentWidth || styles.siteContentWidth
  return (
    <>
      <Header />
      <main 
        className={styles.main}
        style={{maxWidth: width}}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteContentWidth: PropTypes.string
}

export default Layout
