import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Header, TabBar } from 'components'
import Content from './Content'

const HowtoMaintain = () => {
  const headerProps = {
    rightContentType: 'tabBar',
  }

  const containerProps = {
    renderHeader: <Header {...headerProps}>维修流程</Header>,
    renderTabBar: <TabBar selectedTab="" hidden />,
  }

  return (
    <Container {...containerProps}>
      <Content />
    </Container>
  )
}

export default connect()(HowtoMaintain)
