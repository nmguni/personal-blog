import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGit } from "@fortawesome/free-brands-svg-icons"

import blogHeader from "../styles/blogHeader.module.scss"

const BlogHeader = () => {
  return (
    <div className={blogHeader.container}>
      <div className={blogHeader.header__title}>Blog</div>
      <div className={blogHeader.header__subtitle}>
        "Work as hard as you possibly can on at least one thing and see what
        happens." <br />- Jordan Peterson
      </div>
      <div className={blogHeader.header__icons}>
        <a
          className={blogHeader.header__icon}
          href="https://twitter.com/Ndumiso_29"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FontAwesomeIcon icon={faTwitter} className="icon-class" size="lg" />
        </a>
        <a
          className={blogHeader.header__icon}
          href="https://github.com/nmguni"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGit} className="icon-class" size="lg" />
        </a>
        <a
          className={blogHeader.header__icon}
          href="https://www.linkedin.com/in/ndumiso-mguni-121b7b164/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="icon-class"
            size="lg"
          />
        </a>
        {/* <FontAwesomeIcon icon={faChrome} className="icon-class" size="lg" /> */}
      </div>
    </div>
  )
}

export default BlogHeader
