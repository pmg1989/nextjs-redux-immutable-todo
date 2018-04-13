import wx from 'weixin-js-sdk'
import axios from 'axios'

function getWechatSigniture (shareUrl = location.href) {
  axios.post('/share/api/v1/social/wxcfg', { url: encodeURIComponent(shareUrl.split('#')[0]) }).then(({ data }) => {
    wx.config({
      debug: data.debug,          // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。//debug最后要改为true
      appId: data.appId,          // 必填，公众号的唯一标识
      timestamp: data.timestamp,  // 必填，生成签名的时间戳
      nonceStr: data.nonceStr,    // 必填，生成签名的随机串
      signature: data.signature,  // 必填，签名，见附录1
      jsApiList: data.jsApiList,   // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    })
  })
}

function share (params) {
  const { title, link = location.href, desc, imgUrl, type = '', dataUrl = '' } = params

  // 获取签名信息
  getWechatSigniture()

  wx.ready(() => {
    // 分享到朋友圈
    wx.onMenuShareTimeline({
      title,    // 分享标题
      link,     // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl,   // 分享图标
      success () {

      },
      cancel () {

      },
    })

    // 分享给朋友
    wx.onMenuShareAppMessage({
      title,    // 分享标题
      desc,     // 分享描述
      link,     // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl,   // 分享图标
      type,     // 分享类型,music、video或link，不填默认为link
      dataUrl,  // 如果type是music或video，则要提供数据链接，默认为空
      success () {

      },
      cancel () {

      },
    })

    // 分享到QQ
    wx.onMenuShareQQ({
      title,    // 分享标题
      desc,     // 分享描述
      link,     // 分享链接
      imgUrl,   // 分享图标
      success () {

      },
      cancel () {

      },
    })

    // 分享到QQ空间
    wx.onMenuShareQZone({
      title,    // 分享标题
      desc,     // 分享描述
      link,     // 分享链接
      imgUrl,   // 分享图标
      success () {

      },
      cancel () {

      },
    })

    // 分享到腾讯微博
    wx.onMenuShareWeibo({
      title,    // 分享标题
      desc,     // 分享描述
      link,     // 分享链接
      imgUrl,   // 分享图标
      success () {

      },
      cancel () {

      },
    })
  })
}

export default { share, wx }
