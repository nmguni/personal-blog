import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Header } from "../components/Header"

import { HomeContainer, PageLink, PageLinka } from "../elements"

class IndexPage extends React.Component {
  render() {
    const title = "Hi i'm Ndumiso"
    const subHeader =
      " I design and develop websites & apps. Feel free to check out my work below. "
    const stack = "html - css/scss - javascript - react/gatsby - gsap "

    return (
      <>
        <Layout location={this.props.location}>
          <Header stack={stack} title={title} subHeader={subHeader} />
          <SEO
            title="Home"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />

          <HomeContainer>
            <PageLink style={{ backgroundColor: "#f3e5f5" }} to="blog">
              Blog
            </PageLink>
            <PageLink style={{ backgroundColor: " #e3f2fd" }} to="/projects">
              Projects
            </PageLink>
            <PageLinka
              target="_blank"
              rel="noopener noreferrer"
              href="https://devmguni.com"
            >
              Portfolio
            </PageLinka>
          </HomeContainer>
        </Layout>
      </>
    )
  }
}

export default IndexPage
