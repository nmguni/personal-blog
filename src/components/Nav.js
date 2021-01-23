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
          <NavLinks>
            <NavLogo to="/">
              <NavLogo>the blog</NavLogo>
            </NavLogo>
          </NavLinks>
          <NavMenu>
            <NavItem>
              <Link to="/about">
                <NavLinks>about</NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/blog">
                {" "}
                <NavLinks> blog</NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link>
                <NavLinks>resume</NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/projects">
                <NavLinks>projects</NavLinks>
              </Link>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Navbar>
    </>
  )
}
