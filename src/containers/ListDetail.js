import React from 'react'
import Head from 'next/head'
import Nav from 'components/Nav'

const ListDetail = () => {
  return (
    <div className="viewport">
      <Head>
        <title>list-detail</title>
        <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
        <link rel='stylesheet' type='text/css' href='/static/css/todo.css' />
        <link rel="stylesheet" href="/_next/static/style.css" />
      </Head>
      <Nav />
      <div className="box">
        i am list detail
      </div>
    </div>
  )
}

export default ListDetail
