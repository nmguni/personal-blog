import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Header } from "../components/Header"

import { HomeContainer } from "../elements"

class IndexPage extends React.Component {
  render() {
    const title = "Hi i'm Ndumiso"
    const subHeader =
      " I design and develop websites & apps. Feel free to check out my work below. "

    return (
      <>
        <Layout location={this.props.location}>
          <Header title={title} subHeader={subHeader} />
          <SEO
            title="Home"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />

          <HomeContainer></HomeContainer>
        </Layout>
      </>
    )
  }
}

export default IndexPage
