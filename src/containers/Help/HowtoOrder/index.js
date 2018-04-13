import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Header, TabBar } from 'components'
import Content from './Content'

const HowtoOrder = () => {
  const headerProps = {
    rightContentType: 'tabBar',
  }

  const containerProps = {
    renderHeader: <Header {...headerProps}>下单流程</Header>,
    renderTabBar: <TabBar selectedTab="" hidden />,
  }

  return (
    <Container {...containerProps}>
      <Content />
    </Container>
  )
}

export default connect()(HowtoOrder)
