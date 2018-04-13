(function (doc, win) {
  let docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  const recalc = function () {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    if (clientWidth > 768) {
      clientWidth = 768
    }
    // docEl.style.fontSize = `${20 * (clientWidth / 320)}px`
    docEl.style.fontSize = `${50 * (clientWidth / 375)}px`
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
}(document, window))
