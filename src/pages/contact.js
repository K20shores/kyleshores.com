import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./contact.module.scss"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>
      If you are interested in hiring me for a small project, shoot me a message
      below. I'm extremely interested in anything related to climate adapatation
      and mitigation, but I'm open to any requests that you may have.
    </p>
    <p>If you'd like some examples of what I can do, here's a list.</p>
    <ul>
      <li>Wordpress blog with eCommerce</li>
      <li>Command line applications</li>
      <li>Task automation</li>
      <li>
        This site was built with <a href="https://www.gatsbyjs.com/">Gatsby</a>.
        I can also build one of these for you.
      </li>
    </ul>
    <form
      id="contact"
      className={styles.form}
      method="post"
      action="https://getform.io/f/c3309246-ab8e-4da9-8136-3d37ff1b0614"
    >
      <label>
        Email
        <input
          required
          type="email"
          name="email"
          placeholder="you@something.com"
        />
      </label>
      <label>
        Name
        <input required type="text" name="name" placeholder="First Last" />
      </label>
      <label htmlFor="message">
        Message
        <textarea required id="message" name="message"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  </Layout>
)

export default SecondPage
