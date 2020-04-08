import React from 'react'
import PropTypes from 'prop-types'

import Recommendation from '../../components/recommendation'
import Content from '../../components/content'

import '../../assets/less/preview.less'

const RecommendationPreview = ({ entry, widgetFor, widgetsFor }) => {

  // const reviews = entry.getIn(['data', 'reviews'])
  const reviews = widgetsFor('reviews')

  return reviews.map((review, index) => {
    console.log(review.getIn(['data', 'title']))
    console.log(review.getIn(['data', 'url']))
    console.log(review.getIn(['widgets', 'body']))
    return <p />
  })


  // return reviews.map(node => {
  //   // console.log(node.get('body'))

  //   return (
  //     <Recommendation 
  //       title={node.getIn(['title'])}
  //       url={node.getIn(['url'])}
  //     >
  //       {/* <Content className='Recommendation__Review' content={widgetFor('body')} /> */}
  //     </Recommendation>
  //   )
  // })

}

RecommendationPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RecommendationPreview
