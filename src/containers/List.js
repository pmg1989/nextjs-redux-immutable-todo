import React from 'react'
import Head from 'next/head'
import Nav from 'components/Nav'
// import styles from './List.scss'

const List = () => {
  return (
    <div className="viewport">
      <Head>
        <title>list</title>
      </Head>
      <Nav />
      <div className="box">
        <span>i am demo list</span>
        <span>i am demo list</span>
      </div>
      {/* <style jsx>{styles}</style> */}
    </div>
  )
}

export default List
