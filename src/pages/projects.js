import React from 'react'

import Breadcrumbs from '../components/breadcrumbs'
import Gallery from '../components/gallery'
import Layout from '../components/layout'
import Project from '../components/project'
import SEO from '../components/seo'

import '../assets/less/page.less'

const ProjectsPage = () => (
  <Layout>
    <SEO title='Projects' />
    <Breadcrumbs crumbs={[
      { label: 'Projects', url: '/projects', active: true }
    ]} />
    <Project 
      description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
      title={`2020 - Project 52`}
      media={(
        <iframe 
          title='Mike Holloway - Project 52 (2020) Playlist'
          width="100%" 
          height="600" 
          scrolling="no" 
          frameBorder="no" 
          allow="autoplay" 
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/958569085&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"
        ></iframe>
      )}
      url={'https://www.foo.com' }
    />
    <Project 
      description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
      media={<Gallery imageDir={'projects/shots-fired'} />}
      title={`Shots Fired`}
      url={'https://www.foo.com' }
    />
  </Layout>
)

export default ProjectsPage
