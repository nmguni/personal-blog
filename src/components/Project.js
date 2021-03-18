import React from "react"
import ReactTooltip from "react-tooltip"
import {
  ProjectPageContainer,
  ProjectImageWrapper,
  ProjectName,
  ProjectStack,
  ProjectDescription,
  ProjectCard,
  Image,
  GitHubLnk,
  Content,
} from "../elements"

import ProjectData from "../data/ProjectData"

const Project = () => {
  return (
    <ProjectPageContainer>
      {ProjectData.map(x => (
        <ProjectCard key={x.id}>
          <ProjectDescription>
            <ProjectName>{x.title}</ProjectName>
            <Content>
              <ProjectStack>{x.stack}</ProjectStack>
              <GitHubLnk href={x.gitLink}> Github </GitHubLnk>
            </Content>
          </ProjectDescription>
          <ProjectImageWrapper
            href={x.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            data-background-color="rgba(67, 221, 230, 0.11)"
            data-text-color="black"
            data-tip={x.tooltip}
          >
            <ReactTooltip />
            <Image style={{ margin: 0 }} src={x.img} alt={x.alt} />
          </ProjectImageWrapper>
        </ProjectCard>
      ))}
    </ProjectPageContainer>
  )
}

export default Project
