import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./blog-preview.less"

const BlogPreview = ({ published, title, url }) => {
  return (
    <article className="BlogPreview">
      <span className="BlogPreview__Published">{published}</span>
      <Link to={url} className="BlogPreview__Title">
        {title}
      </Link>
    </article>
  )
}

BlogPreview.propTypes = {
  published: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
}

export default BlogPreview
