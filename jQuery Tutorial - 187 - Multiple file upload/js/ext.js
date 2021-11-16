$(document).ready(function () {
  $('#add_more').click(function () {
    count_input = $('input[type = "file"]').length;
    next_count = count_input + 1;
    $('#file_upload').prepend('<p><input type="file" name="file_' + next_count + '"></p>');
  });
});




