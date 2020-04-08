import React from 'react'
import { graphql } from 'gatsby'

import Breadcrumbs from '../../components/breadcrumbs'
import { HTMLContent } from '../../components/content'
import Layout from '../../components/layout'
import Recommendation from '../../components/recommendation'
import SEO from '../../components/seo'

import '../../assets/less/page.less'

const RecommendationsPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  const { frontmatter } = edges[0].node
  const { reviews } = frontmatter

  return (
    <Layout>
      <SEO title='Recommendations' />
      <Breadcrumbs crumbs={[
        { label: 'Recommendations', url: '/recommendations', active: true }
      ]} />
      {reviews && reviews.map((review, i) => (
        <Recommendation
          key={`review_${i}`}
          title={review.title}
          url={review.url}
        >
          <HTMLContent className='Recommendation__Review' content={review.html} />
        </Recommendation>
      ))}
    </Layout>
  )
}

export default RecommendationsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fields: {slug: {regex: "/recommendations/"}}}) {
      edges {
        node {
          frontmatter {
            reviews {
              title
              url
              html
            }
          }
        }
      }
    }
  }
`