import React from 'react'

import Breadcrumbs from '../components/breadcrumbs'
import BlogPreview from '../components/blog-preview'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../assets/less/page.less'

const ArchivePage = () => (
  <Layout>
    <SEO title='Archive' />
    <Breadcrumbs crumbs={[
      { label: 'Blog', url: '/' },
      { label: 'Archive', url: '/archive', active: true }
    ]} />
    <BlogPreview
      published={`Tue 31st March, 2020`}
      title={`If I built a system to sell X, this is how I'd do it`}
      url={'/blog/slug' }
    />
    <BlogPreview
      published={`Tue 31st March, 2020`}
      title={`My flow to grow`}
      url={'/blog/slug' }
    />
    <BlogPreview
      published={`Tue 31st March, 2020`}
      title={`Buying and selling Ethereum through Coinbase`}
      url={'/blog/slug' }
    />
  </Layout>
)

export default ArchivePage
