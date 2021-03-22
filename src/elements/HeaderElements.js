import styled from "styled-components"

export const HeaderContainer = styled.div`
  font-family: "Roboto", sans-serif;
  height: 330px;
  color: #454545;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`
export const HeaderText = styled.span`
  color: #24292f;
  font-weight: bold;
  font-size: 5.5vw;
  padding: 0 1rem 0 0;
  text-transform: capitalize;
  letter-spacing: 0.08rem;
`

export const TextContainer = styled.div`
  display: flex;
`
export const HeadSubText = styled.p`
  font-size: 1.3rem;
  text-align: center;
  width: 70%;
  color: #454545;
  letter-spacing: 0.08rem;
  margin-bottom: 0.3rem;

  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 650px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 0.5rem;
  }
`

export const Stack = styled.p`
  font-size: 1.1vw;
  text-align: center;
  color: #454545;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.15rem;

  border-bottom: solid 1.5px rgba(67, 221, 230, 0.51);
`
