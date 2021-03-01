import React from "react"
import {
  ProjectPageContainer,
  ProjectImageWrapper,
  ProjectName,
  ProjectStack,
  ProjectDescription,
  ProjectCard,
  Image,
} from "../elements"

import ProjectData from "../data/ProjectData"

const Project = () => {
  {
    console.log(Object.keys(ProjectData))
  }

  return (
    <ProjectPageContainer>
      {ProjectData.map(x => (
        <ProjectCard key={x.key}>
          <a href={x.liveLink} target="_blank" rel="noopener noreferrer">
            <ProjectDescription>
              <ProjectName>{x.title}</ProjectName>
              <ProjectStack>{x.stack}</ProjectStack>
              {/* <ProjectLinks>
            <GitHubLnk>Github</GitHubLnk>
            <DemoLink>Live Demo</DemoLink>
          </ProjectLinks> */}
            </ProjectDescription>
            <ProjectImageWrapper>
              <Image style={{ margin: 0 }} src={x.img} alt={x.alt} />
            </ProjectImageWrapper>
          </a>
        </ProjectCard>
      ))}
    </ProjectPageContainer>
  )
}

export default Project
