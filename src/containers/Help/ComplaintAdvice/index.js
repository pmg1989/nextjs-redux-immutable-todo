import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Header, TabBar } from 'components'
import ListItem from './ListItem'

const ComplaintAdvice = () => {
  const headerProps = {
    rightContentType: 'tabBar',
  }

  const containerProps = {
    renderHeader: <Header {...headerProps}>投诉建议</Header>,
    renderTabBar: <TabBar selectedTab="" hidden />,
  }

  return (
    <Container {...containerProps}>
      <ListItem />
    </Container>
  )
}

export default connect()(ComplaintAdvice)
