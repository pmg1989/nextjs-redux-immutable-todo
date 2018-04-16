import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Error extends Component {
  static propTypes = {
    statusCode: PropTypes.number,
  }

  static getInitialProps ({ res, err }) {
    const statusCode = (res && res.statusCode) || (err && err.statusCode) || null
    return { statusCode }
  }

  render () {
    return (
      <p>
        {this.props.statusCode
          ? `服务器错误，状态码： ${this.props.statusCode}`
          : '客户端发生错误'}
      </p>
    )
  }
}