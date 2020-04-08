import React from 'react'
import PropTypes from 'prop-types'

import Recommendation from '../../components/recommendation'
import Content from '../../components/content'

import '../../assets/less/preview.less'

const RecommendationPreview = ({ entry, widgetFor, widgetsFor }) => {

  const reviews = entry.getIn(['data', 'reviews'])

  console.log(widgetsFor('reviews'))
  console.log(widgetsFor(['data', 'reviews']))

  return reviews.map(node => {
    // console.log(node.get('body'))

    return (
      <Recommendation 
        title={node.getIn(['title'])}
        url={node.getIn(['url'])}
      >
        {/* <Content className='Recommendation__Review' content={widgetFor('body')} /> */}
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
