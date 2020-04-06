import React from 'react'

import Breadcrumbs from '../components/breadcrumbs'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../assets/less/page.less'

const DoodlePage = () => (
  <Layout>
    <SEO title='Doodle' />
    <Breadcrumbs crumbs={[
      { label: 'Doodle', url: '/doodle', active: true },
      { label: 'Gallery', url: '/gallery'}
    ]} />
  </Layout>
)

export default DoodlePage
