
$(document).ready(function () {
  var text_length = 55;
  $('#feedback').html(text_length + " Charecters Remaining");

  $('#textarea').keyup(function () {
    var text_total = $(this).val().length;
    var remain = text_length - text_total;
    $('#feedback').html(remain + " Charecters Ramaining");
  });
});