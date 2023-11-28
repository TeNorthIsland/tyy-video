const NO_LIKE_COLOR = '#b9b9b9'
const LIKE_COLOR = '#ef8a86'
$(document).ready(function () {
  // ----collapse
  const collapse = new jQueryCollapse($('#rc-collapse-vipinfo'), {
    query: 'div .rc-collapse-header',
    accordion: true, // 单选模式
    open: function () {
      this.slideDown(150)
    },
    close: function () {
      this.slideUp(150)
    },
  })

  $('#rc-collapse-vipinfo').bind('opened', function (e, section, b, c) {
    const domEle = $(section.$summary[0])
    domEle.addClass('rc-collapse-content-active')

    // 选中当前项 加入选中状态
    $('input[type=radio]', section.$summary[0]).attr('checked', 'true')
  })

  $('#rc-collapse-vipinfo').bind('closed', function (e, section) {
    const domEle = $(section.$summary[0])
    domEle.removeClass('rc-collapse-content-active')

    // 实现一个动画效果
    $('input[type=radio]', section.$summary[0]).removeAttr('checked')
  })

  // ----modal
  $('.page_pannerContent').each(function (index, element) {
    $(element).click(function (param) {
      // open modal
      $('#modal-vip-order-info').appendTo('body').modal({
        showClose: false,
      })
    })
  })

  $('#modal-vip-order-info').addClass('modal-vip-order-info')

  // ----add like (默认是没有收藏的)
  $('#like-icon').click(function (e) {
    const svg1 = $('path', '#like-icon')
    const originColor = svg1.attr('fill')
    if (originColor === NO_LIKE_COLOR) {
      svg1.attr('fill', LIKE_COLOR)
      // $('#my-like').show()
      return
    }
    svg1.attr('fill', NO_LIKE_COLOR)
    // $('#my-like').hide()
  })

  $('#add-like').click(function (param) {
    const like_tag_ele = $('#my-like')
    if (like_tag_ele.attr('data-in') == 0) {
      $('#my-like').show()
      like_tag_ele.attr('data-in', '1')

      return
    }
    $('#my-like').hide()
    like_tag_ele.attr('data-in', '0')
  })
  // 默认关闭
  $('#my-like').hide()

  // xgplay
})
