import * as React from "react"
import Layout from "../components/layout"
import { useSiteBlogData } from "../hooks/use-site-blog-data"
import { SEO } from "../components/seo"
import Summary from "../components/summary"

const IndexPage = (props) => {
  const data = useSiteBlogData()
  return (
    <Layout>
      <Summary data={data} />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO title="Home Page" />
