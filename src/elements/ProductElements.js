import styled from "styled-components"
import styledMap from "styled-map"

import ColorData from "../data/ColorData"

const buttonColor = styledMap`
  primary: #D1C4E9;
  warning: #80DEEA;
  info: #80CBC4;

`

export const ProjectPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
`
export const Contaner = styled.div`
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: rhythm(24);
  min-height: 100vh;
`
export const ProjectCard = styled.div`
  margin: 1rem;
`
export const ProjectImageWrapper = styled.div`
  background-color: #f5f5f5;
  width: 400px;
  height: 280px;
  border-radius: 3px;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProjectImg = styled.div`
  width: 360px;
`
export const ProjectDescription = styled.div`
  margin: 0;
  color: ${buttonColor};
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  line-height: 1.2rem;
  letter-spacing: 0.9px;
`
export const ProjectName = styled.div`
  color: #454545;
  margin: 0;
  padding: 0;
  font-weight: 900;
`
export const ProjectStack = styled.p`
  color: #686868;
  margin: 0;
`
export const ProjectLinks = styled.p`
  margin: 0;
  color: red;
`
export const GitHubLnk = styled.p`
  margin: 0;
  color: red;
`
export const DemoLink = styled.p`
  margin: 0;
  color: red;
`
