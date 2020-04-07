import { useEffect } from 'react'
import { navigate } from 'gatsby'

import '../assets/less/page.less'

const IndexPage = ({ data }) => {
  useEffect(() => {
    const { edges: posts } = data.allMarkdownRemark
    navigate(posts[0].node.fields.slug)
  }, [data])
  return null
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 1, sort: {fields:frontmatter___date, order:DESC}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "ddd Do MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`