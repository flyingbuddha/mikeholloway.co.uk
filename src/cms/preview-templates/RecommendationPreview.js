import React from 'react'
import PropTypes from 'prop-types'

import Recommendation from '../../components/recommendation'
import Content from '../../components/content'

import '../../assets/less/preview.less'

const RecommendationPreview = ({ entry, widgetFor }) => {

  console.log(entry)

  console.log(entry.getIn(['data']))
  console.log(entry.getIn(['data', 'reviews']))

  return (
    <Recommendation 
      title={entry.getIn(['data', 'title'])}
      url={entry.getIn(['data', 'url'])}
    >
      {/* <Content className='Recommendation__Review' content={widgetFor('body')} /> */}
    </Recommendation>
  )
}

RecommendationPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RecommendationPreview
