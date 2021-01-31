import styled from "styled-components"

export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const BlogContainer = styled.div`
  border: 2px solid #656565;
  font-family: "Roboto", sans-serif;
  ${"" /* background-color: #f4f4f4; */}
  border-radius: 3px;
  padding: 0.5rem 1.5rem;
  width: 45rem;
  margin: 0.3rem;
`
export const BlogTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
  color: #454545;
  padding: 2px;
  margin: 0;
  display: inline-block;
  box-shadow: none;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #00fafa;
  }
`
export const BlogDec = styled.div`
  font-size: 0.9rem;
  color: #747474;
`
export const BlogDate = styled.div`
  font-size: 0.6rem;
`
export const Difficulty = styled.div`
  text-transform: uppercase;
  display: inline-block;
  background-color: #a5d6a7;
  padding: 0px 8px;
`
