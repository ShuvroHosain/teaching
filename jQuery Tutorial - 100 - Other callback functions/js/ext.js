$(document).ready(function () {
  $(document).ready(function () {
    $('#btn').click(function () {
      var name = $('#textVal').val();
      var address = $('#textarea').val();
      
      $.post('php/reverse.php', { name: name, address: address }, function (data) {
        $('#someFeedback').html(data);
      }).error(function () {
        $('#messeges').append('Error has been occored <br>');
      }).complete(function () {
        $('#messeges').append('Request Completed  <br>');
      }).success(function () {
        $('#messeges').append('Your Request Completed   <br>');
      });
    });
  });
});

