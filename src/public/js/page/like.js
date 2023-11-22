const ID_LIKE_LIST = 'user-like-list'
const ID_VIDEO_LIST = 'user-like-video-list'
// like-delete
$(document).ready(function () {
  // 删除modal
  $('.like-delete').each((a, ele, c) => {
    $(ele).click(function (param) {
      // open modal
      $('#modal').appendTo('body').modal({
        showClose: false,
      })
      $('#modal-delete').attr('data-id', ele.dataset.vid)
    })
  })

  // fillter check
  $(`#${ID_LIKE_LIST}`).hide()
  $('p', '#FilterLike_itemContent').click(function (a, b, c) {
    $(this).addClass('active')
    // 把它的兄弟节点的active去掉
    $(this).siblings().removeClass('active')

    // 获取当前的data-id
    const id = $(this).attr('data-key')
    if (id === ID_LIKE_LIST) {
      $(`#${ID_VIDEO_LIST}`).hide()
      $(`#${ID_LIKE_LIST}`).show()
    }

    if (id === ID_VIDEO_LIST) {
      $(`#${ID_LIKE_LIST}`).hide()
      $(`#${ID_VIDEO_LIST}`).show()
    }
  })
})
