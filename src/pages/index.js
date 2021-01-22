import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { Nav } from "../components/Nav"

class IndexPage extends React.Component {
  render() {
    // const siteTitle = "Gatsby Starter Personal Website"

    return (
      <>
        <Nav />
        <Layout location={this.props.location}>
          <SEO
            title="Home"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />

          <h1>under construction</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <Link to="/blog/">
            {/* <Button marginTop="35px">Go to Blog</Button> */}
          </Link>
        </Layout>
      </>
    )
  }
}

export default IndexPage
