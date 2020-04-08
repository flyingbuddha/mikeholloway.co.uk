import React from 'react'
import PropTypes from 'prop-types'

import './recommendation.less'

const Recommendation = ({
  children,
  title,
  url
}) => (
  <article className='Recommendation'>
    <a
      href={url}
      className='Recommendation__Title'
      target='_blank'
      rel='noopener noreferrer'
    >{title}</a>
    {children}
  </article>
)

Recommendation.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  url: PropTypes.string
}

export default Recommendation
