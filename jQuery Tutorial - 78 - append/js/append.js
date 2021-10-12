

$(document).ready(function () {
  $('#btn').click(function () {
    var inputValue = $('#inputVal').val();
    $('#appendHere').append('My Name Is: '+inputValue);
  });
});
