const ID_USER_INFO = 'user-info'
const ID_ORDER_LIST = 'user-order-list'

$(document).ready(function () {
  //
  $(`#${ID_ORDER_LIST}`).hide()
  $('span', '#page_tabTitle').click(function (a, b, c) {
    $(this).addClass('page_active')
    // 把它的兄弟节点的active去掉
    $(this).siblings().removeClass('page_active')

    // 获取当前的data-id
    const id = $(this).attr('data-key')
    if (id === ID_USER_INFO) {
      $(`#${ID_ORDER_LIST}`).hide()
      $(`#${ID_USER_INFO}`).show()
    }

    if (id === ID_ORDER_LIST) {
      $(`#${ID_USER_INFO}`).hide()
      $(`#${ID_ORDER_LIST}`).show()
    }
  })
})
