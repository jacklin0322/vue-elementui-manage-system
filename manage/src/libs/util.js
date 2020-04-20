import cookies from './util.cookie.js'
// import db from './util.db.js'
import log from './util.log.js'

const util = {
  cookies,
  // db,
  log
}

/**
 * @description 更新标题
 * @param {String} title 标题
 */
util.title = function (titleText) {
  const processTitle = process.env.VUE_APP_TITLE || 'EL-Admin'
  window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ''}`
}

/**
 * @description 打开新页面
 * @param {String} url 地址
 */
util.open = function (url) {
  var a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
  a.setAttribute('id', 'el-link-temp')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById('el-link-temp'))
}

export default util
