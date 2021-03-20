import styled from "styled-components"
import { Link } from "gatsby"

export const HomeContainer = styled.div`
  height: 300px;
  background-color: #ffffff;
  margin: 0 10%;
  display: flex;
  justify-content: space-evenly;
`

export const Container = styled(Link)`
  font-family: "Roboto", sans-serif;
  height: 200px;
  width: 300px;

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

  ${Container}:nth-child(1) {
    background-color: #f3e5f5;
  }

  ${Container}:nth-child(2) {
    background-color: #e3f2fd;
  }

  ${Container}:nth-child(3) {
    background-color: #e8eaf6;
  }

  color: #454545;
  font-size: 3rem;
`
