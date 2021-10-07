
$(document).ready(function () {
  $('#some_text').scroll(function () {
    var scrol_top = $(this).scrollTop()
    $('#feedback').html('You have scrolled! '+ scrol_top);
  });
});
