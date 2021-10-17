$(document).ready(function () {
  $('#load').click(function () {
    var name = $('#name').val();
    $.ajax({
      url: 'php/page.php',
      data: {
        name: name,
      },
      success: function (data) {
        $('#content').html(data);
      }
   })
 })
});

