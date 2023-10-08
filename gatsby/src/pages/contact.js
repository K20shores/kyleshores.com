import * as React from "react"

import { Layout, ContactForm } from "../components"
import Seo from "../components/seo"

const Contact = () => {
  return (
    <Layout >
      <ContactForm />
    </Layout>
  )
}

export default Contact

export const Head = () => (
  <Seo title="Contact" />
)