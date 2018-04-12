import React from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'
import classnames from 'classnames'
import Link from '../Link'
import styles from './Nav.less'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
  <nav>
    <ul className={styles['nav-box']}>
      <li>
        <Link activeClassName={styles.active} to="/">
          <a className={classnames(styles['nav-link'], styles['home-link'])}>Home</a>
        </Link>
      </li>
      <li>
        <Link activeClassName={styles.active} to="/list">
          <a className={styles['nav-link']}>list</a>
        </Link>
      </li>
      <li>
        <Link route="list-detail" params={{ id: 1 }} activeClassName={styles.active}>
          <a className={styles['nav-link']}>list-detail</a>
        </Link>
      </li>
    </ul>
  </nav>
)
