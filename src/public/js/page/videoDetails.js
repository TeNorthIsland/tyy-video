$(document).ready(function () {
  const collapse = new jQueryCollapse($('#rc-collapse-vipinfo'), {
    query: 'div .rc-collapse-header',
    open: function () {
      this.slideDown(150)
    },
    close: function () {
      this.slideUp(150)
    },
  })

  // 附加的一个效果
  $('#rc-collapse-vipinfo').bind('opened', function (e, section) {
    const domEle = $(section.$summary[0])
    domEle.addClass('rc-collapse-content-active')

    // 选中当前项 加入选中状态
    console.log(domEle)
    $('input[type=radio]', section.$summary[0]).attr('checked', 'true')
  })

  $('#rc-collapse-vipinfo').bind('closed', function (e, section) {
    const domEle = $(section.$summary[0])
    domEle.removeClass('rc-collapse-content-active')

    // 实现一个动画效果
    $('input[type=radio]', section.$summary[0]).removeAttr('checked')
  })
})
