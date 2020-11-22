import React from "react"

// import blogImages2 from "../data/data"
import blogImages from "../data/data.js"
import blogImageContainer from "../styles/blogImageContainer.module.scss"

const Img = () => {
  const listItems = blogImages.map(item => (
    <div className={blogImageContainer.img}>
      <img src={item.image} alt={item.alt} />
    </div>
  ))

  {
    return <div>{listItems}</div>
  }
}

export default Img
