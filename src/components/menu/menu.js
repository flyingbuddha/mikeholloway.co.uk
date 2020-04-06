import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { navigate } from 'gatsby'

import Button from '../button'

import './menu.less'

const Menu = ({ isMenuOpen }) => (
  <div className={classNames('Menu', {'Menu-Closed': !isMenuOpen})}>
    <Button
      className='Button-Menu'
      onClick={() => navigate('/')}
    >Blog</Button>
    <Button
      className='Button-Menu'
      onClick={() => navigate('/recommendations')}
    >Recommendations</Button>
    <Button
      className='Button-Menu'
      onClick={() => navigate('/projects')}
    >Projects</Button>
    <Button
      className='Button-Menu'
      onClick={() => navigate('/doodle')}
    >Doodle</Button>
  </div>
)

Menu.propTypes = {
  isMenuOpen: PropTypes.bool
}

Menu.defaultProps = {
  isMenuOpen: false
}

export default Menu
