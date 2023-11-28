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

  // chat plugin
  $('#chat').click(function (param) {
    /*
  'https://chat.chatra.io/?isModern=true#hostId=dCREqX7oZBKLWCCK6&mode=frame&clientId=04pvedplsXApkgF4sN_GWX5YU9H5C4c5u62Lt0i8&isMobile=1&buttonType=round&lang=en&currentPage=https%3A%2F%2Fa60f-218-201-61-38.ngrok-free.app%2Ftab%2Fvip&currentPageTitle=TYY-Video&prevPage=&referrer=https%3A%2F%2Fa60f-218-201-61-38.ngrok-free.app%2F'
  */
    // $('#chatra-wrapper').show()
    Chatra('openChat', true)
  })
  window.ChatraSetup = {
    chatWidth: Number($(window).width() - 40),
    chatHeight: Number($(window).height() - 80),
    //   startHidden: true,
    //   buttonPosition: 'bl',
    //   buttonSize: 75,
    // customWidgetButton: '.custom-chat-button',
    //   zIndex: 10,
    //   mode: 'frame',
    //   /* id of the block you want to embed chat into */
    //   injectTo: 'chatra-wrapper',
  }

  window.ChatraIntegration = {
    name: 'u3326591009',
    email: '',
  }
  ;(function (d, w, c) {
    // w.ChatraID = 'dCREqX7oZBKLWCCK6'
    w.ChatraID = 'aMPgRXqJqJumRmgGS'
    var s = d.createElement('script')
    w[c] =
      w[c] ||
      function () {
        ;(w[c].q = w[c].q || []).push(arguments)
      }
    s.async = false
    // s.src = d.location.protocol === 'https:' ? 'https:' : 'http:' + '//chat.chatra.io/chatra.js'
    s.src = '/public/js/lib/chatra.js'
    if (d.head) d.head.appendChild(s)
  })(document, window, 'Chatra')
})
