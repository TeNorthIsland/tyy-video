$(document).ready(function () {
  const collapse = new jQueryCollapse($('#vip-info-collapse-screen'), {
    query: 'div .vip-header-screen',
    open: function () {
      this.slideDown(150)
    },
    close: function () {
      this.slideUp(150)
    },
  })

  // modal
  $('#page_pannerContent').each(function (index, element) {
    $(element).click(function (param) {
      // open modal
      $('#modal-vip-order-info').appendTo('body').modal({
        showClose: false,
      })
    })
  })

  $('#modal-vip-order-info').addClass('modal-vip-order-info')
})
