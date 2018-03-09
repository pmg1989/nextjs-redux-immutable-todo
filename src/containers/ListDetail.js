import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'

const ListDetail = () => {
  return (
    <div className="viewport">
      <Head>
        <title>list-detail</title>
      </Head>
      <Nav />
      <div className="box">
        i am list detail
      </div>
    </div>
  )
}

export default ListDetail
