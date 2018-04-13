import React from 'react'
import { PropTypes } from 'prop-types'
import { bindActionCreators } from 'redux'
import classnames from 'classnames'
import Router from 'next/router'
import { connect } from 'react-redux'
import { NavBar, Icon } from 'antd-mobile'
import appActions from 'actions/app'
import { Head } from 'components'
import styles from './Header.less'

const Header = ({ children, showTabBar, rightContentType, onApp, ...headerProps }) => {
  const dicRightContentType = {
    tabBar: (
      <span className={classnames(styles.btn_nav, showTabBar && styles.active)} onClick={() => onApp.toggleTabBar()}>
        <i /><i /><i />
      </span>
    ),
  }

  const handleBack = () => {
    Router.back()
  }

  const navBarProps = {
    leftContent: '',
    icon: <Icon type="icon-arrow-left" />,
    mode: 'dark',
    onLeftClick: handleBack,
    rightContent: dicRightContentType[rightContentType] || headerProps.rightContent,
    ...headerProps,
  }

  return (
    <div className={styles['fixed-top']}>
      <Head title={children} />
      <NavBar {...navBarProps}>
        {children.length > 12 ? `${children.substr(0, 12)}...` : children}
      </NavBar>
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
  showTabBar: PropTypes.bool,
  rightContentType: PropTypes.string,
  onApp: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  showTabBar: state.getIn(['app', 'tabBar', 'show']),
})

const mapDispatchToProps = dispatch => ({
  onApp: bindActionCreators(appActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
