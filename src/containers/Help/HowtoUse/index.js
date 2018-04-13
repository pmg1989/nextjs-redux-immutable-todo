import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Header, TabBar } from 'components'
import GridHeader from './GridHeader'
import ListItem from './ListItem'

const HowToUse = () => {
  const headerProps = {
    rightContentType: 'tabBar',
  }

  const containerProps = {
    renderHeader: <Header {...headerProps}>租机流程</Header>,
    renderTabBar: <TabBar selectedTab="" hidden />,
  }

  return (
    <Container {...containerProps}>
      <GridHeader />
      <ListItem />
    </Container>
  )
}

export default connect()(HowToUse)

