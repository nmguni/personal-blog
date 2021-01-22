import styled from "styled-components"

export const Navbar = styled.nav`
  background-color: #22212169;
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
  letter-spacing: 0.2rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: 700;
`

export const NavMenu = styled.ul`
  display: flex;
  align-content: center;
  list-style: none;
  text-align: center;
  justify-content: center;
  background-color: red;
  height: 100%;
  ${"" /* margin-right: -22px; */}

  @media screen and (max-width: 760px) {
    display: none;
  }
`

export const NavItem = styled.ul`
  height: 80px;
`

export const NavLinks = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  height: 100%;
  cursor: pointer;
  letter-spacing: 0.1rem;
  /* highlght clicked link */
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`
