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

    return (
      <div className={blogStyles.home}>
        <div className={blogStyles.home__container}>
          <div className={blogStyles.home__title}>Hello I'm Ndumiso</div>
          <div className={blogStyles.home__subtitle}>
            Welcome to my{" "}
            <span className={blogStyles.subtitle__color}>blog!</span>
          </div>
          <div className={blogStyles.home__paragraph}>
            I started this blog to cover technologies and topics that I'm
            unfamiliar with or have trouble understanding in Front-End
            Development. Writing about such topics will not only help me with my
            pursuit of knowledge in addition to other devs as well.
          </div>
          <div className={blogStyles.home__stack}>
            JavaScript - ES6+ - React - Redux - Node - HTML - CSS{" "}
          </div>
          <div className={blogStyles.btn__container}>
            <Link className={blogStyles.button} to="/blog">
              {" "}
              Blog
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
