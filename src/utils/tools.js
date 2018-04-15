// 根据key获取url中的参数
export function queryString (value) {
  const reg = new RegExp(`(^|&)${value}=([^&]*)(&|$)`, 'i')
  const r = location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

export function renderBgImage (url) {
  return {
    background: `url('${url}') no-repeat center center`,
    backgroundSize: 'cover',
  }
}

export function parseTime (time) {
  let min = parseInt(time / 60, 10).toString()
  let sec = parseInt(time % 60, 10).toString()
  if (min.length === 1) {
    min = `0${min}`
  }
  if (sec.length === 1) {
    sec = `0${sec}`
  }
  return `${min}:${sec}`
  // return `${min.padStart(2, '0')}:${sec.padStart(2, '0')}`
}

export function scrollToAnchor (anchorName) {
  if (anchorName) {
    const anchorElement = document.querySelector(`#question${anchorName}`)
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
