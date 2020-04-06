import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './button.less'

const Button = ({ children, className, onClick }) => (
  <button 
    className={classNames('Button', className)}
    onClick={onClick}
  >{children}</button>
)

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  onClick: () => {}
}

export default Button
