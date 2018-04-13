import React from 'react'
import { Head, Nav } from 'components'

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
