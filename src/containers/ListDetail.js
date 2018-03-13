import React from 'react'
import Head from 'components/Head'
import Nav from 'components/Nav'

const ListDetail = () => {
  return (
    <div className="viewport">
      <Head title="list-detail" />
      <Nav />
      <div className="box">
        i am list detail
      </div>
      <div>Loading data from {process.env.BACKEND_URL}</div>
    </div>
  )
}

export default ListDetail
