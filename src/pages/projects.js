import React from "react"
import Layout from "../components/layout"
import Project from "../components/Project"
import { Header } from "../components/Header"

const Projects = () => {
  const title = "Projects "
  return (
    <Layout>
      <Header title={title} />
      <Project />
    </Layout>
  )
}

export default Projects
