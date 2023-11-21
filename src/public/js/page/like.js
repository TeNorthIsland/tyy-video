// like-delete
$(document).ready(function () {
  //
  $('.like-delete').each((a, ele, c) => {
    $(ele).click(function (param) {
      // open modal
      $('#modal').appendTo('body').modal({
        showClose: false,
      })
      $('#modal-delete').attr('data-id', ele.dataset.vid)
    })
  })
})
