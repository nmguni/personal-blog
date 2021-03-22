import React from "react"
import {
  HeaderContainer,
  HeaderText,
  HeadSubText,
  TextContainer,
  Stack,
} from "../elements"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-solid-svg-icons"

export const Header = ({ title, subHeader, stack }) => {
  return (
    <HeaderContainer>
      <TextContainer>
        <HeaderText>
          {title}
          <span style={{ color: "rgba(67, 221, 230, 0.51)", fontSize: "1vw" }}>
            <FontAwesomeIcon icon={faSquare} />
          </span>
        </HeaderText>
      </TextContainer>
      <HeadSubText>{subHeader}</HeadSubText>
      <Stack>{stack}</Stack>
    </HeaderContainer>
  )
}
