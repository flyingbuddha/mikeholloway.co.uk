import React from "react"
import { graphql } from "gatsby"

import { kebabCase } from "../../lib/utils"

import Breadcrumbs from "../../components/breadcrumbs"
import BlogPreview from "../../components/blog-preview"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import "../../assets/less/page.less"

const BlogArchivePage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Blog" />
      <Breadcrumbs
        crumbs={[{ label: "Blog: All", url: "/blog", active: true }]}
      />
      {posts.map(({ node }) => {
        return (
          <BlogPreview
            key={kebabCase(node.fields.slug)}
            published={node.frontmatter.date}
            title={node.frontmatter.title}
            url={node.fields.slug}
          />
        )
      })}
    </Layout>
  )
}

export default BlogArchivePage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { slug: { regex: "/blog/" } } }
    ) {
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
