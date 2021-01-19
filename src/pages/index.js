import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import SEO from "../components/seo"
// import Button from "../components/button"

import blogStyles from "../styles/blogStyles.module.scss"

class IndexPage extends React.Component {
  render() {
    // const siteTitle = "Hello,"
    // const siteTitle = "Hello,"
    // <Layout location={this.props.location} title={siteTitle}>
    // ;
    // ;<SEO keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

    return <div className={blogStyles.home}></div>
  }
}

export default IndexPage
