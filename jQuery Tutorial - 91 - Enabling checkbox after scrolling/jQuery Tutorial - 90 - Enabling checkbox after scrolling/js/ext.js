$(document).ready(function () {
  $('#btn').attr('disabled', 'disabled');

  $('#tearms').scroll(function () {
    var textarea_height = $(this)[0].scrollHeight;
    var scroll_height = textarea_height - $(this).innerHeight();
    var scroll = $(this).scrollTop();

    if (scroll_height == scroll) {
      $('#btn').removeAttr('disabled');
    }
    $('#feedback').html(textarea_height);
  })
});
