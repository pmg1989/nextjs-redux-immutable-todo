import React from 'react'
import Link from 'next/link'
import { Container, Header, TabBar, Nav } from 'components'
import { STATIC_HOST, PROXY_HOST } from 'utils/config'
import styles from './List.less'

let listCount = 0

const List = () => {
  listCount += 1
  console.log(listCount)
  const headerProps = {
    rightContentType: 'tabBar',
  }

  const containerProps = {
    renderHeader: <Header {...headerProps}>商品列表页</Header>,
    renderTabBar: <TabBar selectedTab="" hidden />,
  }

  return (
    <Container {...containerProps}>
      <Nav />
      <div className={styles.box}>
        <Link href={{ pathname: 'list-detail', query: { id: '2' } }}>list detail id 2</Link>
        STATIC_HOST: { STATIC_HOST } <br />
        PROXY_HOST : { PROXY_HOST } <br />
        process.env.REACT_APP_API_ENV: { process.env.REACT_APP_API_ENV } <br />
        process.env.BACKEND_URL: { process.env.BACKEND_URL } <br />
      </div>
    </Container>
  )
}

export default List
