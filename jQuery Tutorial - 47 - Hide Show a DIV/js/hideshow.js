
$(document).ready(function () {
  $('#messege').css('width', '300px').css('border', '2px solid red');
  $('#hideshow').toggle(function () {
    $(this).text('Show');
    $('#messege').hide();
  }, function () {
    $(this).text('Hide');
    $('#messege').show();
  });
});

