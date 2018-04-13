import { isApp, isIOS } from 'utils/app'
import { getTypeNameFromId, getTypeName } from 'utils/tools'

const getType = () => {
  if (isApp()) {
    return isIOS() ? 'ios' : 'android'
  }
  return 'web'
}

// 登录信息采集
function login (params) {
  zhuge.identify(params.mobile, {
    name: params.firstname, // 预定义属性
    avatar: params.image, // 预定义属性
    学号: params.idnumber,
    校区: params.school,
    角色: params.rolename,
    用户名: params.uname,
    设备平台: getType(),
  })
}

// 分享我的录音
function share (title, author) {
  zhuge.track('分享我的录音', {
    歌曲名称: title,
    原唱: author,
    分享渠道: getType(),
  })
}

// 预约课程
function reserve (params) {
  zhuge.track('预约课程', {
    课程名称: params.categorySummary,
    课程时间: params.dates,
    课程类型: getTypeNameFromId(params.categoryId),
    录音歌曲名称: params.song || '',
    录音歌曲原唱: params.original_singer || '',
    是否自带伴奏: { 1: '是', 2: '否' }[params.back_source] || '',
  })
}

// 取消预约课程
function cancelReserve (params) {
  zhuge.track('取消预约课程', {
    课程名称: params.categorySummary,
    课程时间: params.dates,
    课程类型: getTypeNameFromId(params.categoryId),
  })
}

// 反馈课程
function feedback (params) {
  zhuge.track('反馈课程', {
    老师满意度: params.score,
    建议: params.lesson_suggestion,
    评价: params.teacher_suggestion,
    老师名字: params.teacher,
    课程名称: params.category_summary,
    课程时间: params.dates,
    课程类型: getTypeNameFromId(params.categoryId),
  })
}

// 阅读老师的反馈
function review (params) {
  zhuge.track('阅读老师的反馈', {
    对课程的评价: params.lesson,
    对学生的评价: params.student,
    老师名字: params.teacher,
    课程名称: params.category_summary,
    课程时间: params.dates,
    课程类型: getTypeNameFromId(params.categoryId),
  })
}

// 进入练习模块
function enterPractice (params) {
  zhuge.track('进入练习模块', {
    课程名称: params.categoryId,
    课程类型: getTypeName(params.categoryId.split('-')[0]),
  })
}

// 预览练习课程
function enterPracticeDetail (params) {
  zhuge.track('预览练习课程', {
    课程名称: params.categoryId,
    课程类型: getTypeName(params.categoryId.split('-')[0]),
  })
}

// 播放歌曲
function playAudioPlayer (params) {
  zhuge.track('播放歌曲', {
    歌曲名称: params.title,
    类别: params.type,
  })
}

// 展开歌曲详情
function showAudioPlayerFullScreen (params) {
  zhuge.track('展开歌曲详情', {
    歌曲名称: params.title,
    类别: params.type,
  })
}

// 重播歌曲
function loopAudioPlayer (params) {
  zhuge.track('重播歌曲', {
    歌曲名称: params.title,
    类别: params.type,
  })
}

export default {
  share,
  login,
  reserve,
  cancelReserve,
  feedback,
  review,
  enterPractice,
  enterPracticeDetail,
  playAudioPlayer,
  showAudioPlayerFullScreen,
  loopAudioPlayer,
}
