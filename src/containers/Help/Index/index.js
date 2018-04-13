import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Header, Head } from 'components'
import GridHeader from './GridHeader'
import ListItem from './ListItem'

class Help extends Component {
  static propTypes = {
  }

  componentDidMount () {
  }

  render () {
    const headerProps = {
      rightContentType: 'tabBar',
    }

    const containerProps = {
      renderHeader: <Header {...headerProps}>帮助中心</Header>,
    }

    return (
      <Container {...containerProps}>
        <Head title="帮助中心" />
        <GridHeader />
        <ListItem />
      </Container>
    )
  }
}

export default connect()(Help)
