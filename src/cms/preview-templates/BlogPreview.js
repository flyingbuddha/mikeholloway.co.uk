import React from 'react'
import PropTypes from 'prop-types'

import Blog from '../../components/blog'
import Content from '../../components/content'

import '../../assets/less/preview.less'

const BlogPreview = ({ entry, widgetFor }) => (
  <Blog 
    published={entry.getIn(['data', 'date'])}
    title={entry.getIn(['data', 'title'])}
  >
    <Content className='Blog__Content' content={widgetFor('body')} />
  </Blog>
)

BlogPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPreview
