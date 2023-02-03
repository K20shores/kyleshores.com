import * as React from "react"
import { Products } from "../components"

import { Layout } from "../components"
import Seo from "../components/seo"

const Store = ({ location }) => {
  const params = new URLSearchParams(location?.search || '');
  const purchased = (params.get("purchased") === 'true') || false; // eslint-disable-line no-unused-vars
  return (
    <Layout >
      <Seo title="Products of Kyle Shores" />
      <Products />
    </Layout>
  )
}

export default Store