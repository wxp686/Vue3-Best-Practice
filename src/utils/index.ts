/*
 * @Description: 
 * @Autor: wxp
 * @Date: 2021-12-24 10:26:07
 * @LastEditors: wxp
 * @LastEditTime: 2021-12-24 12:14:16
 */

const returnErrorDom = (() => {
  let div = document.createElement<'div'>('div')
  div.style.border = '1px solid red'
  div.innerText = '出错了 大哥'
  return div
})()

export {
  returnErrorDom
}