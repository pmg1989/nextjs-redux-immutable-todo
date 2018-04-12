import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const MyLink = ({ className, to, children }) => {
  return (
    <Link href={to}><a className={className}>{children}</a></Link>
  )
}

MyLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

export default MyLink
