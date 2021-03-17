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

  margin-top: 1rem;
`
export const Contaner = styled.div`
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: rhythm(24);
  min-height: 100vh;
`
export const ProjectCard = styled.div`
  margin: 1rem 0.5rem;
`
export const ProjectImageWrapper = styled.a`
  padding: 0.1rem 0.5rem;
  box-shadow: none;
  display: flex;
  margin: 0 !import;
  justify-content: center;
  align-items: center;
`
export const ProjectImg = styled.div`
  width: 360px;
`
export const Image = styled.img`
  width: 360px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 15px 10px -15px rgb(0 0 0 / 30%);
  transition: 1s;
  filter: grayscale(10);

  &:hover {
    filter: grayscale(0);
    transition: 0.5s;
  }
`
export const ProjectDescription = styled.div`
  margin: 0;
  color: ${buttonColor};
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  line-height: 1.2rem;
  letter-spacing: 0.9px;
  padding: 0.2rem 0.8rem;
`
export const ProjectName = styled.div`
  color: #454545;
  margin: 0;
  padding: 0;
  font-weight: 900;
`
export const ProjectStack = styled.p`
  color: #686868;
  font-size: 0.8rem;
  margin: 0;
`
export const GitHubLnk = styled.a`
  margin: 0;
  color: rgb(67, 221, 230);
  box-shadow: none;
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`
export const DemoLink = styled.p`
  margin: 0;
  color: red;
`
