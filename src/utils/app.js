function isIOS () {
  return !!/NB-GENERAL-IOS/i.test(navigator.userAgent)
}

function isAndroid () {
  return !!/NB-GENERAL-AND/i.test(navigator.userAgent)
}

function isApp () {
  return isIOS() || isAndroid()
}

function getAppVersion () {
  let val = /\[NB\](.*?)\[\!NB\]/.exec(navigator.userAgent)
  if (val && val.length > 1) {
    val = JSON.parse(val[1])
    return +val.VERSION.replace(/\./g, '')
  }
  return 0
}

export {
  getAppVersion,
  isAndroid,
  isIOS,
  isApp,
  tools,
}
