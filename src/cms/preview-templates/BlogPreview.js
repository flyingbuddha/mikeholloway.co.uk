import React from 'react'
import PropTypes from 'prop-types'

import Blog from '../../components/blog'
import Content from '../../components/content'

import '../../assets/less/preview.less'

const BlogPreview = ({ entry, widgetFor }) => {
  console.log(widgetFor('body'))

  // ddd Do MMMM, YYYY
  console.log(entry.getIn(['data', 'datetime']))

  return (
    <Blog 
      published={entry.getIn(['data', 'datetime'])}
      title={entry.getIn(['data', 'title'])}
    >
      {/* <Content className='Blog__Content' content={widgetFor('body')} /> */}
      <p>Preview</p>
    </Blog>
  )
}

BlogPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPreview
