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
  })

  $('#rc-collapse-vipinfo').bind('closed', function (e, section) {
    const domEle = $(section.$summary[0])
    domEle.removeClass('rc-collapse-content-active')
    // 实现一个动画效果
  })
})
