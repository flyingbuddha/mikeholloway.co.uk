import React from 'react'

import Breadcrumbs from '../components/breadcrumbs'
import Layout from '../components/layout'
import Recommendation from '../components/recommendation'
import SEO from '../components/seo'

import '../assets/less/page.less'

const RecommendationsPage = () => (
  <Layout>
    <SEO title='Recommendations' />
    <Breadcrumbs crumbs={[
      { label: 'Recommendations', url: '/recommendations', active: true }
    ]} />
    <Recommendation
      review={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
      title={`The Idea in You: How to Find It, Build It, and Change Your Life`}
      url={'https://amzn.to/2yvzrxx' }
    />
    <Recommendation
      review={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
      title={`Side Hustle: Build a Side Business and Make Extra Money – Without Quitting Your Day Job`}
      url={'https://amzn.to/3aNvpir' }
    />
  </Layout>
)

export default RecommendationsPage
