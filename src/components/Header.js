import React from "react"
import {
  HeaderContainer,
  HeaderText,
  HeadMainText,
  HeadSubText,
  HighlightTxt,
  TextContainer,
} from "../elements"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fas } from "@fortawesome/fontawesome-svg-core"
import { faSquare } from "@fortawesome/free-solid-svg-icons"

export const Header = ({ title, subHeader }) => {
  return (
    <HeaderContainer>
      <TextContainer>
        <HighlightTxt>
          {title}
          <span style={{ color: "#43dde6", fontSize: ".6rem" }}>
            <FontAwesomeIcon icon={faSquare} />
          </span>
        </HighlightTxt>
      </TextContainer>
      <HeadSubText>{subHeader}</HeadSubText>
    </HeaderContainer>
  )
}
