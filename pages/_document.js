import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'

// from https://github.com/zeit/next.js/edit/canary/examples/with-react-helmet/pages/_document.js
export default class extends Document {
  static async getInitialProps (...args) {
    const documentProps = await super.getInitialProps(...args)
    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...documentProps, helmet: Helmet.renderStatic() }
  }

  get helmetHtmlAttrComponents () {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  get helmetBodyAttrComponents () {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  get helmetHeadComponents () {
    return Object.keys(this.props.helmet)
        .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
        .map(el => this.props.helmet[el].toComponent())
  }

  get helmetJsx () {
    const title = 'Hello next.js Real World!'
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
        <link rel='stylesheet' type='text/css' href='//unpkg.com/antd-mobile@2.1.8/dist/antd-mobile.min.css' />
        <link rel="stylesheet" href="/_next/static/style.css" />
        <style jsx="true" global>{`
          html {
            font-size: 50px;
          }
          body {
            background-color: #eee !important;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        
          .am-accordion-header {
            font-size: 0.28rem !important;
            font-weight: bold;
          }
        
          .am-grid-item-content {
            height: auto !important;
          }
        `}
        </style>
      </Helmet>
    )
  }

  render () {
    return (
      <html lang="en" {...this.helmetHtmlAttrComponents}>
        <Head>
          { this.helmetJsx }
          { this.helmetHeadComponents }
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <script src="/static/js/iconfont.js"></script>
          <NextScript />
        </body>
      </html>
    )
  }
}
