import React from 'react'
import PropTypes from 'prop-types'

import './blog.less'

const Blog = ({
  children,
  published,
  title
}) => (
  <article className='Blog'>
    <h2 className='Blog__Title'>{title}</h2>
    <h3 className='Blog__Published'>{published}</h3>
    {children}
  </article>
)

Blog.propTypes = {
  children: PropTypes.node,
  published: PropTypes.string,
  title: PropTypes.string
}

export default Blog
