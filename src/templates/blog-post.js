import React from 'react'
import { graphql } from 'gatsby'

import Breadcrumbs from '../components/breadcrumbs'
import Blog from '../components/blog'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../assets/less/page.less'

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: post } = data
  const { title, date } = post.frontmatter
  const { html } = post

  return (
    <Layout>
      <SEO title='Blog' description={title} />
      <Breadcrumbs crumbs={[
        { label: 'Blog: All', url: '/blog' }
      ]} />
      <Blog 
        content={html}
        published={date}
        title={title}
      />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "ddd Do MMMM, YYYY")
        title
      }
    }
  }
`