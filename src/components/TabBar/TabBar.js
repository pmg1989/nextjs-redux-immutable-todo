import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Immutable from 'immutable'
import Router from 'next/router'
import { bindActionCreators } from 'redux'
import { TabBar } from 'antd-mobile'
import { Icon } from 'components'
import { connect } from 'react-redux'
import appActions from 'actions/app'
import styles from './TabBar.less'

const Item = TabBar.Item

const dicType = {
  home: '/',
  product: '/product/category',
  myCenter: '/account/center',
}

class MyTabBar extends Component {
  static propTypes = {
    tabBar: PropTypes.instanceOf(Immutable.Map).isRequired,
    selectedTab: PropTypes.string,
    hidden: PropTypes.bool,
    onApp: PropTypes.object.isRequired,
  }

  static defaultProps = {
    hidden: false,
    selectedTab: '',
  }

  componentWillMount () {
    const { hidden, selectedTab, onApp } = this.props
    onApp.initTabBar(selectedTab, !hidden)
  }

  handlePress = type => () => {
    // this.props.onApp.changeTabBar(type)
    Router.push(dicType[type])
  }

  render () {
    const { tabBar } = this.props
    const selectedTab = tabBar.get('active')
    const show = tabBar.get('show')

    return (
      <div className={classnames(styles.tabbar_box, show && styles.fixed)}>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#c83b33"
          barTintColor="white"
          hidden={!show}
        >
          <Item
            icon={<Icon type="icon-index" />}
            selectedIcon={<Icon type="icon-index-active" />}
            title="首页"
            key="home"
            selected={selectedTab === 'home'}
            onPress={this.handlePress('home')}
          />
          <Item
            icon={<Icon type="icon-category" />}
            selectedIcon={<Icon type="icon-category-index" />}
            title="商品"
            key="product"
            selected={selectedTab === 'product'}
            onPress={this.handlePress('product')}
          />
          <Item
            icon={<Icon type="icon-people" />}
            selectedIcon={<Icon type="icon-people-active" />}
            title="我的"
            key="myCenter"
            selected={selectedTab === 'myCenter'}
            onPress={this.handlePress('myCenter')}
          />
        </TabBar>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tabBar: state.getIn(['app', 'tabBar']),
})

const mapDispatchToProps = dispatch => ({
  onApp: bindActionCreators(appActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(MyTabBar)
