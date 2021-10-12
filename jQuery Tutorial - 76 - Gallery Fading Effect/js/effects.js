

$(document).ready(function () {
  $('.image').css('opacity', 0.4);
  $('.image').mouseover(function () {
    $(this).fadeTo(500, 1);
    $('.image').not(this).fadeTo(500, 0.4);
  })
});
