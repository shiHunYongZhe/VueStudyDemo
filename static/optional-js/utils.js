// 判断一个元素是否在视窗内
function isInSport (ele, wra) {
  // 判断该图片是否能够加载，判断图片是否在可视区域内
  const wraHeight = wra.clientHeight
  const rect = ele.getBoundingClientRect()
  // 如果超出视窗返回false
  if (rect.bottom <= (wraHeight + 100) && rect.bottom >= (wraHeight / 2)) {
    return true
  }
  if (rect.top <= (wraHeight + 100) && rect.top >= 0) {
    return true
  }
  return false
}

export default isInSport
/**
 * 传入关键字和内容，将内容中含有关键字的部分添加对应的高亮样式
 * @param {*} keyword
 * @param {*} val
 */
export const filterSetKeyWords = (keyword, val, property) => {
  let results = []
  const _val = val
  _val.map((item, index) => {
    if (keyword && keyword.length > 0) {
      // 匹配关键字正则
      let replaceReg = new RegExp(keyword, 'g')
      // 高亮替换v-html值
      let replaceString =
        `<i style="color: #3399EA">${keyword}</i>`
      _val[index][property] = item[property].replace(
        replaceReg,
        replaceString
      )
    }
  })
  results = _val
  return results
}
