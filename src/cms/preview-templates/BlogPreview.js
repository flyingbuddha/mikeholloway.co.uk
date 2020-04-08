import React from 'react'
import PropTypes from 'prop-types'

import Blog from '../../components/blog'

const BlogPreview = ({ entry, widgetFor }) => (
  <Blog
    content={widgetFor('body')}
    published={''}
    title={entry.getIn(['data', 'title'])}
  />
)

BlogPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPreview
