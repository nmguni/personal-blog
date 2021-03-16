import React from "react"
import Layout from "../components/layout"
import Project from "../components/Project"
import { Header } from "../components/Header"

const Projects = () => {
  const title = "Projects"
  const subHeader =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "

  return (
    <Layout>
      <Header subHeader={subHeader} title={title} />
      <Project />
    </Layout>
  )
}

export default Projects
