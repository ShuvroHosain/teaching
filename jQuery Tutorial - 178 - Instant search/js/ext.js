$(document).ready(function () {
  $('#search').keyup(function () {
    search = $(this).val();

    $.post('php/search.php', { search: search }, function (data) {
      $('#result').html(data);
    })
  })
});




