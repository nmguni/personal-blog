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
  function isActive({ isCurrent }) {
    return isCurrent ? { className: "active" } : null
  }

  return (
    <>
      <Navbar>
        <NavbarContainer>
          <NavItem>
            <Link to="/">
              <NavLogo>the blog</NavLogo>
            </Link>
          </NavItem>
          <NavMenu>
            <NavItem>
              <Link to="/about" getProps={isActive}>
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
