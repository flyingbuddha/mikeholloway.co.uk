const _ = require('lodash')
const path = require('path')
const remark = require('remark')
const remarkHTML = require('remark-html')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const toHTML = value => remark().use(remarkHTML).processSync(value).toString()

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    result.errors.forEach(e => console.error(e.toString()))
    throw new Error(result.errors)
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(edge => {
    const id = edge.node.id

    if (!edge.node.frontmatter.templateKey) {
      return
    }

    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({ name: `slug`, node, value })

    if (node.fields.slug === '/recommendations/') {
      node.frontmatter.reviews = node.frontmatter.reviews.map(review => ({
        ...review,
        html: toHTML(review.body)
      }))
    }
  }
}