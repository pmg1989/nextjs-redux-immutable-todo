import React from 'react'
import { PropTypes } from 'prop-types'
import { Icon } from 'antd-mobile'

const MyIcon = ({ type, className = '', size = 'md', ...props }) => {
  if (type.default) {
    return (
      <svg className={`am-icon am-icon-${type.default.id} am-icon-${size} ${className}`} {...props}>
        <use xlinkHref={`#${type.default.id}`} />
      </svg>
    )
  }
  return (
    <Icon type={type} size={size} {...props} />
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
