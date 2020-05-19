import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import blogStyles from "../styles/blogStyles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { rhythm, scale } from "../utils/typography"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGit } from "@fortawesome/free-brands-svg-icons"
// import { faenvelope } from "@fortawesome/free-brands-svg-icons"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            backgroundColor: "#fcffa4",
            display: "inline-block",
            padding: ".2rem .5rem",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#353535`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            color: `#353535`,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#353535`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(25),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer className={blogStyles.footer}>
          {new Date().getFullYear()} | Ndumso Mguni |{` `}
          <a
            href="https://www.linkedin.com/in/ndumiso-mguni-121b7b164/"
            target="_blank"
            rel="noopener noreferrer"
            className={blogStyles.footerLinks}
          >
            {" "}
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="icon-class"
              size="lg"
            />
          </a>
          <a
            href="https://twitter.com/Ndumiso_29"
            target="_blank"
            rel="noopener noreferrer"
            className={blogStyles.footerLinks}
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="icon-class"
              size="lg"
            />
          </a>
          {/* <a
            href="mailto: ndumiso29@gmail.com "
            target="_blank"
            rel="noopener noreferrer"
            className={blogStyles.footerLinks}
          >
            <FontAwesomeIcon
              icon={faenvelope}
              className="icon-class"
              size="lg"
            />
          </a> */}
          <a
            href="https://github.com/nmguni"
            target="_blank"
            rel="noopener noreferrer"
            className={blogStyles.footerLinks}
          >
            <FontAwesomeIcon icon={faGit} className="icon-class" size="lg" />
          </a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
