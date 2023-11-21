$(document).ready(function () {
  const collapse = new jQueryCollapse($('#rc-collapse'), {
    query: 'div .category-header',
    open: function () {
      // The context of 'this' is applied to
      // the collapsed details in a jQuery wrapper
      this.slideDown(150)
      console.log('大爱', this)
    },
    close: function () {
      this.slideUp(150)
    },
  })

  // 附加的一个效果
  $('#rc-collapse').bind('opened', function (e, section) {
    // 实现一个动画效果
    const lable = $('.page_rightIcon__ITHwb', section.$summary[0])
    lable[0].style.transition = 'transform 0.5s ease;'
    lable[0].style.transform = 'rotate(90deg)'
  })

  $('#rc-collapse').bind('closed', function (e, section) {
    console.log(section, ' was closed')
    const lable = $('.page_rightIcon__ITHwb', section.$summary[0])
    lable[0].style.transition = 'transform 0.5s ease;'
    lable[0].style.transform = 'rotate(0deg)'
    // 实现一个动画效果
  })
})
