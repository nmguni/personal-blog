import React from "react"
import {
  ProjectContainer,
  ProjectImageWrapper,
  ProjectImg,
  ProjectName,
  ProjectStack,
  ProjectLinks,
  GitHubLnk,
  DemoLink,
  ProjectDescription,
} from "../elements"

const Project = () => {
  return (
    <ProjectContainer>
      <ProjectImageWrapper>
        <ProjectImg>img</ProjectImg>
      </ProjectImageWrapper>
      <ProjectDescription>
        <ProjectName>Store App</ProjectName>
        <ProjectStack>react - css - scss - javascript</ProjectStack>
        <ProjectLinks>
          <GitHubLnk>Github</GitHubLnk>
          <DemoLink>Live Demo</DemoLink>
        </ProjectLinks>
      </ProjectDescription>
    </ProjectContainer>
  )
}

export default Project
