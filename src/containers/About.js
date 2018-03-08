import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
// import styles from './Demo.scss'

const Demo = () => {
  return (
    <div className="viewport">
      <Head>
        <title>about</title>
      </Head>
      <Nav />
      <div className="box">
        <span>i am demo</span>
        <span>i am demo</span>
      </div>
      {/* <style jsx>{styles}</style> */}
    </div>
  )
}

export default Demo
