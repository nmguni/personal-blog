import React from "react"
import Layout from "../components/layout"
import Project from "../components/Project"
import { Header } from "../components/Header"

const Projects = () => {
  const title = "Projects"
  const subHeader =
    "Collection of the most recent projects I have been working on. They are not quite 'portfolio' grade projects but I still wanted a place to display them."

  return (
    <Layout>
      <Header subHeader={subHeader} title={title} />
      <Project />
    </Layout>
  )
}

export default Projects
