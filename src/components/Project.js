import React from "react"
import {
  ProjectPageContainer,
  ProjectImageWrapper,
  ProjectImg,
  ProjectName,
  ProjectStack,
  ProjectDescription,
  ProjectCard,
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
            <ProjectImageWrapper>
              <ProjectImg>
                <img style={{ margin: 0 }} src={x.img} alt={x.alt} />
              </ProjectImg>
            </ProjectImageWrapper>
            <ProjectDescription>
              <ProjectName>{x.title}</ProjectName>
              <ProjectStack>{x.stack}</ProjectStack>
              {/* <ProjectLinks>
            <GitHubLnk>Github</GitHubLnk>
            <DemoLink>Live Demo</DemoLink>
          </ProjectLinks> */}
            </ProjectDescription>
          </a>
        </ProjectCard>
      ))}
    </ProjectPageContainer>
  )
}

export default Project
