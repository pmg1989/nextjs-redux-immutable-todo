import React from 'react'
import { PropTypes } from 'prop-types'

const MyIcon = ({ type, className = '', size = 'md', ...props }) => {
  return (
    <svg className={`am-icon ${type} am-icon-${size} ${className}`} {...props}>
      <use xlinkHref={`#${type}`} />
    </svg>
  )
}

MyIcon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  size: PropTypes.object,
}

export default MyIcon
