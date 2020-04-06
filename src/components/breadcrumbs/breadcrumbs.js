import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { navigate } from 'gatsby'

import { kebabCase } from '../../lib/utils'

import Button from '../button'

import './breadcrumbs.less'

const Breadcrumbs = ({ crumbs }) => (
  <div className='Breadcrumbs'>
    {crumbs.map(({ active, label, url }) => (
      <Button
        className={classNames({'Button-Fill': active})}
        key={`crumb-${kebabCase(label)}`}
        onClick={() => navigate(url)}
      >{label}</Button>
    ))}
  </div>
)

Breadcrumbs.propTypes = {
  crumbs: PropTypes.arrayOf(PropTypes.shape({
    active: PropTypes.bool,
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
}

export default Breadcrumbs
