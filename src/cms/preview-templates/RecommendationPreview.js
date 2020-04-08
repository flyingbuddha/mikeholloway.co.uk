import React from 'react'
import PropTypes from 'prop-types'

import Recommendation from '../../components/recommendation'
import Content from '../../components/content'

import '../../assets/less/preview.less'

const RecommendationPreview = ({ widgetsFor }) => {
  const reviews = widgetsFor('reviews')

  return reviews.map((review, index) => {
    return (
      <Recommendation 
        title={review.getIn(['data', 'title'])}
        url={review.getIn(['data', 'url'])}
      >
        <Content className='Recommendation__Review' content={review.getIn(['widgets', 'body'])} />
      </Recommendation>
    )
  })
}

RecommendationPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RecommendationPreview
