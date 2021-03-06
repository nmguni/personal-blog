import React from "react"
import styled from "styled-components"

export const Navbar = styled.nav`
  font-family: 'Roboto', sans-serif;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition 0.8 all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 15l00px;
  text-transform: uppercase;
`
export const NavLogo = styled.div`
  text-transform: uppercase;
  text-decoration: none;
  color: #454545;
  letter-spacing: 0.2rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: 700;
  height: 80px;
`

export const NavMenu = styled.ul`
  display: flex;
  align-content: center;
  list-style: none;
  text-align: center;
  justify-content: center;
  color: #454545;
  height: 100%;

  @media screen and (max-width: 760px) {
    display: none;
  }
`

export const NavItem = styled.ul`
  height: 80px;
`

export const NavLinks = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #454545;
  padding: 0 1rem;

  height: 100%;
  cursor: pointer;
  letter-spacing: 0.1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #f5f5f5;
    color: #1e8686;
  }
`
export const Link = styled.a`
  background-color: red;
  &.active {
    color: red;
  }
`
