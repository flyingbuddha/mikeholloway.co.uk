import React from 'react'

import Breadcrumbs from '../components/breadcrumbs'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../assets/less/page.less'

const GalleryPage = () => (
  <Layout>
    <SEO title='Gallery' />
    <Breadcrumbs crumbs={[
      { label: 'Doodle', url: '/doodle' },
      { label: 'Gallery', url: '/gallery', active: true }
    ]} />
  </Layout>
)

export default GalleryPage
