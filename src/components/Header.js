import React from "react"
import {
  HeaderContainer,
  HeaderText,
  HeadMainText,
  HeadSubText,
  HighlightTxt,
  TextContainer,
} from "../elements"

export const Header = ({ title, subHeader }) => {
  return (
    <HeaderContainer>
      <TextContainer>
        <HighlightTxt>{title}</HighlightTxt>
      </TextContainer>
      <HeadSubText>{subHeader}</HeadSubText>
    </HeaderContainer>
  )
}
