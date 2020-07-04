import React from 'react'
import InstagramIcon from './instagram.svg'
import TwitchIcon from './twitch.svg'
import GitHubIcon from './github.svg'
import TwitterIcon from './twitter.svg'
import './footer.less'
import Button from '../button'

const Footer = ({ siteTitle }) => (
  <footer className='Footer'>
    <ul className='Social'>
      <li className='Social__Icon'>
        <a
          href='https://www.instagram.com/artdevgame'
          className='Social__Link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={InstagramIcon} alt='Visit artdevgame on Instagram' />
        </a>
      </li>
      <li className='Social__Icon'>
        <a
          href='https://www.twitch.tv/artdevgame'
          className='Social__Link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={TwitchIcon} alt='Visit artdevgame on Twitch' />
        </a>
      </li>
      <li className='Social__Icon'>
        <a
          href='https://github.com/artdevgame'
          className='Social__Link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={GitHubIcon} alt='Visit artdevgame on GitHub' />
        </a>
      </li>
      <li className='Social__Icon'>
        <a
          href='https://twitter.com/artdevgame'
          className='Social__Link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={TwitterIcon} alt='Visit artdevgame on Twitter' />
        </a>
      </li>
    </ul>
    <div className='Footer__CV'>
      <Button onClick={() => window.location.href = 'https://docs.google.com/document/d/1nvkiuc-vZIf_G7rpHpNLzqJS7SrbGFzZlafDnC8V_dk/export?format=pdf'}>Download Résumé</Button>
    </div>
  </footer>
)

export default Footer
