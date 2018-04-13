import React from 'react'
import { List } from 'antd-mobile'
import styles from './Footer.less'

const Item = List.Item

// setTimeout(() => {
//   let e = document.createElement('script')
//   e.type = 'text/javascript'
//   e.async = true
//   e.src = '//dl.ntalker.com/js/xn6/ntkfstat.js?siteid=kf_9593'
//   let s = document.getElementsByTagName('script')[0]
//   s.parentNode.insertBefore(e, s)
// }, 0)

const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault()
    NTKF.im_openInPageChat()
  }

  return (
    <List className={styles.footer_box}>
      <Item>
        <span className={styles.text}>没有找到相关答案？可以联系<a className={styles.link} href="#" onClick={handleClick}>在线客服</a></span>
      </Item>
    </List>
  )
}

// document.getElementById('kefu').addEventListener('click', () => {
//   try {
//     NTKF.im_openInPageChat()
//   } catch (e) {
//     console.log(e)
//   }
// }, false)

export default Footer
