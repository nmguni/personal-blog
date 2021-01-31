import React from "react"
import {
  HeaderContainer,
  HeaderText,
  HeadMainText,
  HeadSubText,
  HighlightTxt,
} from "../elements"

export const Header = ({ title, subHeader }) => {
  return (
    <HeaderContainer>
      {" "}
      <HeadMainText>{title}</HeadMainText>
      <HeadSubText>{subHeader}</HeadSubText>
    </HeaderContainer>
  )
}
