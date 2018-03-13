import React from 'react'
import Head from 'components/Head'
import Nav from 'components/Nav'
import styles from './List.less'

const List = () => {
  return (
    <div className="viewport">
      <Head title="list" />
      <Nav />
      <div className={styles.box}>
        <span className={styles.title}>i am demo list</span>
        <span>i am demo list</span>
        <div>Loading data from {process.env.BACKEND_URL}</div>
      </div>
    </div>
  )
}

export default List
