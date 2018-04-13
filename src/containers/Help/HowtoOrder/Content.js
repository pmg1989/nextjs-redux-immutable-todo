import React from 'react'
import styles from './Content.less'

const Content = () => {
  return (
    <div className={styles.images_box}>
      <img alt="" src="/static/images/help/order-1.png" />
      <img alt="" src="/static/images/help/order-2.png" />
      <img alt="" src="/static/images/help/order-3.png" />
      {/* <img alt="" src={require('static/images/help/order-2.png')} /> */}
    </div>
  )
}

export default Content
