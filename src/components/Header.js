import React from "react"
import {
  HeaderContainer,
  HeaderText,
  HeadMainText,
  HeadSubText,
  HighlightTxt,
} from "../elements"

export const Header = () => {
  return (
    <HeaderContainer>
      {" "}
      <HeadMainText>
        Welcome to my <HighlightTxt>project</HighlightTxt> page.
      </HeadMainText>
      <HeadSubText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
        voluptatum suscipit soluta expedita reiciendis nisi totam alias neque
        facere magnam!
      </HeadSubText>
    </HeaderContainer>
  )
}
