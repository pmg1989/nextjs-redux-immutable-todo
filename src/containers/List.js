import React from 'react'
import Head from 'next/head'
import Nav from 'components/Nav'
import styles from './List.less'

const List = () => {
  return (
    <div className="viewport">
      <Head>
        <title>list</title>
        <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
        <link rel='stylesheet' type='text/css' href='/static/css/todo.css' />
        <link rel="stylesheet" href="/_next/static/style.css" />
      </Head>
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
