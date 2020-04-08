import React from 'react'
import PropTypes from 'prop-types'

import Recommendation from '../../components/recommendation'
import Content from '../../components/content'

import '../../assets/less/preview.less'

const RecommendationPreview = ({ entry, widgetFor }) => {

  const reviews = entry.getIn(['data', 'reviews'])

  return reviews.map(node => {
    console.log(widgetFor('body', node))

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
