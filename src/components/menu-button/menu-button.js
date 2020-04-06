import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import HamburgerIcon from './hamburger.svg'
import DownArrowIcon from './down-arrow.svg'

import './menu-button.less'

const MenuButton = ({ isMenuOpen, onClick }) => {
  const [justPressed, setJustPressed] = useState(false)
  const onPress = (complete) => {
    setJustPressed(complete)
    window.scrollTo(0, 0)
  }
  return (
    <button 
      className={classNames('MenuButton', {'MenuButton-Pressed': justPressed})}
      onAnimationEnd={() => onPress(false)}
      onClick={() => { onPress(true); onClick() }}
    >
      <img src={isMenuOpen ? DownArrowIcon : HamburgerIcon} alt='' />
    </button>
  )
}

MenuButton.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default MenuButton
