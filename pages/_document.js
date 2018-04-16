import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'
import { assetPrefix } from 'utils/config'

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
    const title = '享换机信用租机'
    return (
      <Helmet>
        <title>{title}</title>
      </Helmet>
    )
  }

  render () {
    return (
      <html lang="en" {...this.helmetHtmlAttrComponents} style={{ fontSize: '50px' }}>
        <Head>
         <link rel="icon" href="//mstaticc.xianghuanji.com/favicon.ico" type="image/x-icon" />
         <script async type="text/javascript" src={`${assetPrefix}/static/js/fastclick.min.js`}></script>
          { this.helmetJsx }
          { this.helmetHeadComponents }
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
          <script async src={`${assetPrefix}/static/js/iconfont.js?v=1`}></script>
          <script async src={`${assetPrefix}/static/js/rem.js`}></script>
          
          <script async type="text/javascript" src="//u.nuomi.com/skeleton.js?appId=10198"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if ('addEventListener' in document) {
                document.addEventListener('DOMContentLoaded', function() {
                  FastClick.attach(document.body);
                }, false);
              }

              // help 帮助中心ntkfstat.js需要的传递参数
              NTKF_PARAM = {
                siteid: 'kf_9593',  // 企业ID，必填，取值参见文档开始表
                settingid: 'kf_9593_1495434528643',     // 缺省客服配置ID，必填，取值参见文档开始表
                uid: '',    // 用户ID,未登录可以为空
                uname: '',  // 用户名，未登录可以为空
                isvip: '0',          // 是否为vip用户
                userlevel: '未登录用户',      // 网站自定义会员级别
              }

              function getCookie(name) {
                var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); //正则匹配
                if (arr = document.cookie.match(reg)) {
                    return unescape(arr[2]);
                }
                else {
                    return null;
                }
              }
      
              //自用统计代码 Piwik
              var _paq = _paq || [];
              var visit_man = getCookie('user_id_v2');
              if (visit_man !== null) {
                  _paq.push(['setUserId', visit_man]);
              }
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              // 开启内容追踪
              _paq.push(['trackVisibleContentImpressions']);

              setTimeout(function () {
                // (function () {
                //     var u = "//tk.aihuishou.com/";
                //     _paq.push(['setTrackerUrl', u + 'piwik.php']);
                //     _paq.push(['setSiteId', 18]);
                //     var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
                //     g.type = 'text/javascript';
                //     g.async = true;
                //     g.defer = true;
                //     g.src = '//tkstatic.aihuishou.com/piwik.js';
                //     s.parentNode.insertBefore(g, s);
                // })();
      
                // 享换机 piwik
                (function () {
                    var u="//piwik.xianghuanji.com/";
                    _paq.push(['setTrackerUrl', u + 'piwik.php']);
                    _paq.push(['setSiteId', 1]);
                    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
                    g.type = 'text/javascript';
                    g.async = true;
                    g.defer = true;
                    g.src = '//piwikstaticc.xianghuanji.com/piwik.js';
                    s.parentNode.insertBefore(g, s);
                })();
      
                (function (i, s, o, g, r, a, m) {
                    i['GoogleAnalyticsObject'] = r;
                    i[r] = i[r] || function () {
                            (i[r].q = i[r].q || []).push(arguments)
                        }, i[r].l = 1 * new Date();
                    a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                    a.async = 1;
                    a.src = g;
                    m.parentNode.insertBefore(a, m)
                })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
      
                ga('create', 'UA-91676230-2', 'auto');
                ga('send', 'pageview');
      
              }, 500);
          `}}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <p><img src="//tk.aihuishou.com/piwik.php?idsite=18" style="border:0;" alt=""/></p>
          `}}
          />
        </body>
      </html>
    )
  }
}
