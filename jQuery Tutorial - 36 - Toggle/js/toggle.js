
$(document).ready(function () {
  $('#clickMe').toggle(function () {
    $('#toggle_feedbacks').html('yes');
  }, function () {
    $('#toggle_feedbacks').html('no');
  });
});
