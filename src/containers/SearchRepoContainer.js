import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'

class SearchRepoContainer extends Component {
  render () {
    let { repos } = this.props
    return (
      <div>hahahaha222</div>
    )
  }
}

function mapStateToProps (state) {
  return {
    repos: state.repos
  }
}

SearchRepoContainer.propTypes = {
  repos: PropTypes.instanceOf(Map).isRequired,
}

export { SearchRepoContainer }
export default connect(mapStateToProps, {
})(SearchRepoContainer)
