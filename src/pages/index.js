import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import blogStyles from "../styles/blogStyles.module.scss"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Hello,"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <h1 className={blogStyles.greating}>Welcome to my Blog! </h1>
        <p className={blogStyles.aboutMe}>
          My name is Ndumiso Mguni but you can call me Miso.
        </p>

        <p className={blogStyles.aboutMe}>
          I started this blog to cover technologies and topics that I'm
          unfamiliar with or have trouble understanding in Front-End
          Development. Writing about such topics will not only help me with my
          pursuit of knowledge in addition to other devs as well.
        </p>
        <p className={blogStyles.aboutMe}>
          If I'm not at the gym, I'm reading a good book or trying to finish the
          ones that are half-read, window shopping for sneakers, or attempting
          to binge-watch an anime series in one night!
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
