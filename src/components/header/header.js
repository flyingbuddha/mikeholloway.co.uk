import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import MenuButton from '../menu-button'

import './header.less'

const Header = ({
  isMenuOpen,
  onToggleMenu,
  siteTitle
}) => (
  <header className='Header'>
    <Link to='/'>{siteTitle}</Link>
    <h1 className='Hero'>A site dedicated to thoughts and ideas.</h1>
    <MenuButton isMenuOpen={isMenuOpen} onClick={onToggleMenu} />
  </header>
)

Header.propTypes = {
  isMenuOpen: PropTypes.bool,
  onToggleMenu: PropTypes.func.isRequired,
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  isMenuOpen: false,
  siteTitle: ``,
}

export default Header
