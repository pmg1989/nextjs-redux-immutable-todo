import React from 'react'
import { Head, Nav } from 'components'
import { STATIC_HOST, PROXY_HOST } from 'utils/config'
import styles from './List.less'

const List = () => {
  return (
    <div className="viewport">
      <Head title="list" />
      <Nav />
      <div className={styles.box}>
        STATIC_HOST: { STATIC_HOST } <br />
        PROXY_HOST : { PROXY_HOST } <br />
        process.env.REACT_APP_API_ENV: { process.env.REACT_APP_API_ENV } <br />
        process.env.BACKEND_URL: { process.env.BACKEND_URL } <br />
      </div>
    </div>
  )
}

export default List
