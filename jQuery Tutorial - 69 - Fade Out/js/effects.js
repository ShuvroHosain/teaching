
$(document).ready(function () {
  $('#show').click(function () {
    $('#images').fadeIn(3000, function () {
      $('#feedback').html('Image Shown');
    });
  });

  $('#hide').click(function () {
    $('#images').fadeOut(3000, function () {
      $('#feedback').html('Image Hidden');
    });
  });
});
