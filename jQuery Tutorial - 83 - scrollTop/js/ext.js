

$(document).ready(function () {
  $('#textArea').scroll(function () {
    scroll_position = $(this).scrollTop();
    $('#feedback').html('scroll position is: ' + scroll_position);
 })
});
