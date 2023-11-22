$(document).ready(function () {
  $('#salutation').selectmenu()
  $('#salutation2').selectmenu()

  // s
  $('p', '#FilterBili_itemContent').click(function (a, b, c) {
    $(this).addClass('active')
    // 把它的兄弟节点的active去掉
    $(this).siblings().removeClass('active')
  })
})
