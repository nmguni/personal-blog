import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Header } from "../components/Header"

import { HomeContainer } from "../elements"

class IndexPage extends React.Component {
  render() {
    const title = "i'm a front-end developer"
    const subHeader =
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo  quae, doloribus et non "

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
