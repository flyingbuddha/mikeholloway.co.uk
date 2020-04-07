import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { kebabCase } from '../lib/utils'

import Breadcrumbs from '../components/breadcrumbs'
import BlogPreview from '../components/blog-preview'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../assets/less/page.less'

export const archiveQuery = graphql`
query {
  allMarkdownRemark {
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

const ArchivePage = () => {
  const data = useStaticQuery(archiveQuery)
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title='Archive' />
      <Breadcrumbs crumbs={[
        { label: 'Blog', url: '/' },
        { label: 'Archive', url: '/archive', active: true }
      ]} />
      {posts.map(({ node }) => (
        <BlogPreview
          key={kebabCase(node.fields.slug)}
          published={node.frontmatter.date}
          title={node.frontmatter.title}
          url={node.fields.slug}
        />
      ))}
    </Layout>
  )
  }

export default ArchivePage
