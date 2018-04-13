import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Header, TabBar } from 'components'
import { scrollToAnchor } from 'utils/tools'
import AccordionList from '../AccordionList'
import AccordionOne from './AccordionOne'
import AccordionTwo from './AccordionTwo'
import AccordionThree from './AccordionThree'
import AccordionFour from './AccordionFour'
import Footer from '../Footer'

class CostStatement extends Component {
  static propTypes = {
    url: PropTypes.object.isRequired,
  }

  state = {
    activeKey: this.props.url.query.question,
  }

  componentDidMount () {
    setTimeout(() => {
      const { question } = this.props.url.query
      question && scrollToAnchor(question)
    }, 0)
  }

  render () {
    const { activeKey } = this.state

    const headerProps = {
      rightContentType: 'tabBar',
    }

    const containerProps = {
      renderHeader: <Header {...headerProps}>费用说明</Header>,
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
          <AccordionFour />
        </AccordionList>
        <Footer />
      </Container>
    )
  }
}

export default connect()(CostStatement)
