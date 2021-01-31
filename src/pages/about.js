import React from "react"
import Layout from "../components/layout"
import {
  HeroContainer,
  AboutHeader,
  AboutBtmContainer,
  HeaderText,
} from "../elements"
import { Header } from "../components/Header"

const About = () => {
  const title = "About"
  const subHeader =
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo  quae, doloribus et non nobis deserunt amet ipsa, ullam quas aliquid  modi consectetur saepe facere reiciendis voluptate. Nostrum, commodi   vitae!"
  return (
    <Layout>
      <Header title={title} subHeader={subHeader} />
      <HeroContainer>
        <HeaderText></HeaderText>
      </HeroContainer>
      <AboutBtmContainer>bottom</AboutBtmContainer>
    </Layout>
  )
}

export default About
