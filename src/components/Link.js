import React, { Children } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
// import Link from 'next/link'
import { Link } from '../../routes'

const ActiveLink = ({ router, children, activeClassName, ...props }) => {
  const child = Children.only(children)
  let className = child.props.className || ''
  if (props.to && props.to === router.pathname && activeClassName) {
    className = `${className} ${activeClassName}`.trim()
  } else if (props.route && `/${props.route}` === router.pathname && activeClassName) {
    className = `${className} ${activeClassName}`.trim()
  }

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>
}

ActiveLink.propTypes = {
  router: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  activeClassName: PropTypes.string,
  route: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
}

export default withRouter(ActiveLink)
