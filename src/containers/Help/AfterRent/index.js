import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Header, TabBar } from 'components'
import { scrollToAnchor } from 'utils/tools'
import AccordionList from '../AccordionList'
import AccordionOne from './AccordionOne'
import AccordionTwo from './AccordionTwo'
import AccordionThree from './AccordionThree'
import Footer from '../Footer'

class AfterRent extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired,
  }

  state = {
    activeKey: this.props.query.question,
  }

  componentDidMount () {
    setTimeout(() => {
      const question = this.props.query.question
      question && scrollToAnchor(this.props.query.question)
    }, 0)
  }

  render () {
    const { activeKey } = this.state

    const headerProps = {
      rightContentType: 'tabBar',
    }

    const containerProps = {
      renderHeader: <Header {...headerProps}>到期了解</Header>,
      renderTabBar: <TabBar selectedTab="" hidden />,
    }

    const handleAccordionChange = (key) => {
      this.setState({ activeKey: key })
    }

    return (
      <Container {...containerProps}>
        <AccordionList activeKey={activeKey} onAccordionChange={handleAccordionChange}>
          <AccordionOne />
          <AccordionTwo />
          <AccordionThree />
        </AccordionList>
        <Footer />
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  query: ownProps.url.query,
})

export default connect(mapStateToProps)(AfterRent)
