$(document).ready(function () {
  // s
  $('p', '#FilterBili_itemContent').click(function (a, b, c) {
    $(this).addClass('active')
    // 把它的兄弟节点的active去掉
    $(this).siblings().removeClass('active')
  })
  $('p', '#FilterBili_itemContent2').click(function (a, b, c) {
    $(this).addClass('active')
    // 把它的兄弟节点的active去掉
    $(this).siblings().removeClass('active')
  })
})
