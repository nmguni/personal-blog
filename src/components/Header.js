import React from "react"
import {
  HeaderContainer,
  HeaderText,
  HeadMainText,
  HeadSubText,
  HighlightTxt,
  TextContainer,
  Stack,
} from "../elements"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fas } from "@fortawesome/fontawesome-svg-core"
import { faSquare } from "@fortawesome/free-solid-svg-icons"

export const Header = ({ title, subHeader, stack }) => {
  return (
    <HeaderContainer>
      <TextContainer>
        <HighlightTxt>
          {title}
          <span
            style={{ color: "rgba(67, 221, 230, 0.51)", fontSize: ".6rem" }}
          >
            <FontAwesomeIcon icon={faSquare} />
          </span>
        </HighlightTxt>
      </TextContainer>
      <HeadSubText>{subHeader}</HeadSubText>
      <Stack>{stack}</Stack>
    </HeaderContainer>
  )
}
