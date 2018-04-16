import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Container, Header, TabBar } from 'components'
import styles from './Error.less'

const statusDic = {
  404: '页面未找到',
  500: '服务器错误',
}

export default class Error extends Component {
  static propTypes = {
    statusCode: PropTypes.number,
  }

  static getInitialProps ({ res, err }) {
    const statusCode = (res && res.statusCode) || (err && err.statusCode) || null
    return { statusCode }
  }

  static handleClick () {
    window.location.reload()
  }

  render () {
    const { statusCode } = this.props

    const headerProps = {
      rightContentType: 'tabBar',
    }

    const containerProps = {
      renderHeader: <Header {...headerProps}>{statusDic[statusCode] || '客户端错误'}</Header>,
      renderTabBar: <TabBar selectedTab="" hidden />,
    }

    return (
      <Container {...containerProps}>
        <div className={styles.box}>
          <img className={styles.icon} src="/static/images/error-bg.png" alt="404 not found" />
          <p id={statusCode}>抱歉哦~您访问的页面已经逃离地球表面</p>
          <div className={styles.btn_box}>
            <Link href="/"><a className={styles.btn}>返回首页</a></Link>
            <a className={styles.btn} onClick={Error.handleClick}>重新加载</a>
          </div>
        </div>
      </Container>
    )
  }
}
