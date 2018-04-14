import React from 'react'
import PropTypes from 'prop-types'
import { Head, Nav } from 'components'

const ListDetail = ({ query }) => {
  return (
    <div className="viewport">
      <Head title="list-detail" />
      <Nav />
      <div className="box">
        i am list detail: id: {query.id}
      </div>
      <div>Loading data from {process.env.BACKEND_URL}</div>
    </div>
  )
}

ListDetail.propTypes = {
  query: PropTypes.object.isRequired,
}

ListDetail.getInitialProps = ({ query }) => {
  return {
    query,
  }
}

export default ListDetail
