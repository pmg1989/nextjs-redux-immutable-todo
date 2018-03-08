import { withRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ router, children, activeClassName, ...props }) => {
  const child = Children.only(children)

  let className = child.props.className || ''
  if (router.pathname === props.href && activeClassName) {
    className = `${className} ${activeClassName}`.trim()
  }

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>
}

export default withRouter(ActiveLink)
