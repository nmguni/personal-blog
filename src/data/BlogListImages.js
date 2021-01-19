import React from "react"

import { BLogPostImages } from "../data/data"

const BlogListImages = () => {
  return (
    <div>
      {BLogPostImages.map(images => {
        return (
          <div>
            {" "}
            <img src={images.src} alt={images.alt} />
          </div>
        )
      })}
    </div>
  )
}

export default BlogListImages

