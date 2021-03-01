import styled from "styled-components"

export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;
`
export const BlogContainer = styled.div`
  ${"" /* border: 2px solid #656565; */}
  font-family: "Roboto", sans-serif;
  ${"" /* background-color: #eceff1; */}
  border: solid #00000030 1px;
  border-radius: 3px;
  padding: 0.5rem 1.5rem;
  width: 45rem;
  margin: 0.3rem;
  transition: all 0.3s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    ${"" /* background-color: #eceff1; */}
    border: solid #fff 2px;
  }
`
export const BlogTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
  color: #24292f;
  padding: 2px;
  margin: 0;
  display: inline-block;
  box-shadow: none;
  text-decoration: none;
`
export const BlogDec = styled.div`
  font-size: 0.9rem;

  color: #454545;
`
export const BlogDate = styled.div`
  font-size: 0.6rem;
  color: #747474;
`
export const Difficulty = styled.div`
  color: #454545;
  text-transform: uppercase;
  display: inline-block;
  background-color: #c5e1a5;
  padding: 0px 8px;
  display: inline-block;
  height: 50%;
  margin: 0 0 0 10px;
  border-radius: 3px;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  letter-spacing: 0.05rem;
`
