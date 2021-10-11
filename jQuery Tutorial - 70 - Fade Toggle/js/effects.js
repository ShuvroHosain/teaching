
$(document).ready(function () {
  $('#show_hide').click(function () {
    $('#images').fadeToggle(3000, 'swing', function () {
      $('#feedback').html('Image Shown');
    });
  });
});
