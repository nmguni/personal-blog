import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import blogStyles from "../styles/blogStyles.module.scss"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Hello"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
        <h1 className={blogStyles.greating}>Welcome to my Blog! </h1>

        <p>
          I started this blog to cover technologies and topics that I'm
          unfamiliar with or have trouble understanding. Writing about such
          topics will help me and others who are reading this gain better
          knowledge on the topics at hand.
        </p>
        <p>
          My Goal is to become a proficient full stack developer but at the
          moment my strengths are in the front end. With consistancy and
          patients and lots of practise I know I will reach my goals.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
