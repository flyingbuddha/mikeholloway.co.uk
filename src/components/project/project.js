import React from 'react'
import PropTypes from 'prop-types'

import './project.less'

const Project = ({
  description,
  media,
  title,
  url
}) => (
  <article className='Project'>
    <a
      href={url}
      className='Project__Title'
      target='_blank'
      rel='noopener noreferrer'
    >{title}</a>
    {media && <div className='Project__Media'>{media}</div>}
    <div className='Project__Description'>{description}</div>
  </article>
)

Project.propTypes = {
  description: PropTypes.string,
  media: PropTypes.node,
  title: PropTypes.string,
  url: PropTypes.string
}

export default Project
