$(document).ready(function () {
  $('#load').click(function () {
    $.ajax({
      url: 'php/reverse.html',
      success: function (data) {
        $('#content').html(data);
      }
   })
 })
});

