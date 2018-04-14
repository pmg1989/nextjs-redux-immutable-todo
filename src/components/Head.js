import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const MyHead = ({ children, title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
      <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
      <link rel="stylesheet" type="text/css" href="//unpkg.com/antd-mobile@2.1.8/dist/antd-mobile.min.css" />
      <link rel="stylesheet" type="text/css" href="/static/css/todo.css" />
      <link rel="stylesheet" href="/_next/static/style.css" />
      {children}
    </Head>
  )
}

MyHead.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
}

export default MyHead
