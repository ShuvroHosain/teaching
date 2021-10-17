$(document).ready(function () {
  $('#load').click(function () {
    var name = $('#name').val();
    $.ajax({
      type: 'POST',
      url: 'php/page.php',
      data: {
        name: name,
      },
      statusCode: {
        404: function () {
          
        $('#content').html('Page Not Found');
        }
      },
      success: function (data) {
        $('#content').html(data);
      }
    }).error(function () {
      alert('we got an error');
    }).success(function () {
      alert('successfully request send');
    });
 })
});

