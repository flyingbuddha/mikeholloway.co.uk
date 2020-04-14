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
      media={<Gallery imageDir={'shots-fired'} />}
      title={`Shots Fired`}
      url={'https://www.foo.com' }
    >
      <p>
        Shots Fired is an <a href='https://www.overwolf.com/'>Overwolf app</a> that 
        helps to automate scene switching and source item visibility within OBS.
      </p>
      <p>
        It was orignially developed as part of the <a href='https://play.overwolf.com/pubg-dev-challenge/'>PUBG Developers Challenge</a> and 
        later expanded to support additional games.
      </p>
    </Project>
    <Project
      title={`2020 - Project 52`}
      media={(
        <iframe
          title='Mike Holloway - Project 52 (2020) Playlist'
          width="100%"
          height="600"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/958569085&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
        ></iframe>
      )}
      url={'https://soundcloud.com/mr-holloway/sets/2020-project-52' }
    >
      <p>
        The aim of this project is to deliver a piece of music or sound loop
        every week for the entire year of 2020.
      </p>
      <p>
        I've played with music production in the past, quite literally with
        Mario Paint on the Super Nintendo and later Music 2000 on the PC, but
        not a lot since then.
      </p>
      <p>
        I've got a basic understanding of music theory from YouTube but that's
        as far as it goes. I'm inspired mostly by electronic music and trance
        from the late 90s.
      </p>
      <p>
        This year I'd like to improve my technical ability so I can at least
        think of myself somewhere between a novice and intermediate level. To
        do this, I'll be using Ableton Live and Captain Plugins.
      </p>
    </Project>
  </Layout>
)

export default ProjectsPage
