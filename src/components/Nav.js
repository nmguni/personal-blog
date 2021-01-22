import React from "react"
import { Link } from "gatsby"
import {
  Navbar,
  NavLogo,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavMenu,
} from "../elements"

export const Nav = () => {
  return (
    <>
      <Navbar>
        <NavbarContainer>
          <NavLogo>the blog</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks>About me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/blog"> blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>resume</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>projects</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Navbar>
    </>
  )
}
