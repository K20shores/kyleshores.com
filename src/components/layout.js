import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import styles from "./layout.module.scss"

const Layout = ({ children, marginTop = undefined, marginLeft = undefined, marginRight = undefined, marginBottom = undefined}) => {
  let pageStyles = {
    marginTop : marginTop || `3em`,
    marginBottom : marginBottom || `1em`,
    marginLeft : marginLeft || `10%`,
    marginRight : marginRight || `10%`
  }
  console.log(pageStyles)

  return (
    <>
      <Header />
      <main 
        className={styles.main} 
        style={pageStyles}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
