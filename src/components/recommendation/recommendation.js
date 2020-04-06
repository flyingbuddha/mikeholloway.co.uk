import React from 'react'
import PropTypes from 'prop-types'

import './recommendation.less'

const Recommendation = ({
  review,
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
    <div className='Recommendation__Review'>{review}</div>
  </article>
)

Recommendation.propTypes = {
  review: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
}

export default Recommendation
