$(document).ready(function () {
  // swiper
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000,
    },
    touchEventsTarget: 'container',
    edgeSwipeDetection: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  // toTop
  //首先将#btn隐藏
  $('#toTop').hide()
  //当滚动条的位置处于距顶部50像素以下时，跳转链接出现，否则消失
  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $('#toTop').fadeIn(200)
      } else {
        $('#toTop').fadeOut(200)
      }
    })
    //当点击跳转链接后，回到页面顶部位置
    $('#toTop').click(function () {
      $('body,html').animate(
        {
          scrollTop: 0,
        },
        500
      )
      return false
    })
  })

  // download app modal
  $('#downoad_program').click(function (param) {
    // open modal
    $('#modal').appendTo('body').modal({
      showClose: false,
    })
  })

  $('#modal').addClass('modal-download')

  // footer navi
  $('#footer-home').click(function (param) {
    window.location.href = '/'
  })
  $('#footer-back').click(function (param) {
    window.history.back()
  })

  $('#rc-input-suffix').click(function (param) {
    window.location.href = '/tab/search'
  })

  // ad-link btn open modal
  $('.ad-link').click(function (e) {
    e.preventDefault()
    // open modal
    $('#modal').appendTo('body').modal({
      showClose: false,
    })
  })

  // disabled-button-blue

  // reful
  const ptr = PullToRefresh.init({
    onRefresh() {
      window.location.reload()
    },
    distThreshold: 60,
    // distMax: 60,
    distReload: 50, // 释放之后元素应该达到的一个高度
    distIgnore: 0,
    mainElement: '#component_pageContainer',
    // triggerElement: '#component_pageContainer',
    ptrElement: '.ptr',
    classPrefix: 'ptr--',
    cssProp: 'min-height',
    instructionsPullToRefresh: '刷新页面',
    instructionsReleaseToRefresh: '刷新页面',
    instructionsRefreshing: '刷新中',
    // refreshTimeout: 1000 * 60,
  })
})

// swiper-button-next
