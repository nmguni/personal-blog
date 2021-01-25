import styled from "styled-components"

export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const BlogContainer = styled.div`
  border: 1.5px solid #656565;
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
  padding: 0;
  margin: 0;
`
export const BlogDec = styled.div`
  font-size: 0.8rem;
`
export const BlogDate = styled.div`
  font-size: 0.5rem;
`
export const Difficulty = styled.div`
  text-transform: uppercase;
  display: inline-block;
  background-color: #a5d6a7;
  padding: 0px 8px;
`
