import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'
import styles from './Container.less'

const Container = ({ showTabBar, renderHeader, renderTabBar, children }) => {
  return (
    <div className={styles.content_box}>
      {renderHeader}
      <div className={classnames(styles.content, showTabBar && styles.with_tabbar)}>
        {children}
      </div>
      {renderTabBar}
    </div>
  )
}

Container.propTypes = {
  showTabBar: PropTypes.bool.isRequired,
  renderHeader: PropTypes.node,
  renderTabBar: PropTypes.node,
  children: PropTypes.node,
}

const mapStateToProps = state => ({
  showTabBar: state.getIn(['app', 'tabBar', 'show']),
})

export default connect(mapStateToProps, null)(Container)

