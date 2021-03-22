import styled from "styled-components"
import { Link } from "gatsby"

export const HomeContainer = styled.div`
  background-color: #fff;
  background-image: linear-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    linear-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.06) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  height: 100%;
  padding: 2rem;
  margin: 0 10%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const PageLink = styled(Link)`
  font-family: "Roboto", sans-serif;
  height: 200px;
  width: 300px;
  margin: 0.8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.5s;

  &:hover: {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transition: 0.5s;
  }
  ${"" /* 
  ${PageLink}:nth-child(1) {
    background-color: #f3e5f5;
  } */}

  ${"" /* ${PageLink}:nth-child(2) {
    background-color: #e3f2fd;
  } */}

  color: #454545;
  font-size: 3rem;
`

export const PageLinka = styled.a`
  font-family: "Roboto", sans-serif;
  height: 200px;
  width: 300px;
  margin: 0.8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.5s;

  &:hover: {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transition: 0.5s;
  }

  background-color: #e8eaf6;

  color: #454545;
  font-size: 3rem;
`
