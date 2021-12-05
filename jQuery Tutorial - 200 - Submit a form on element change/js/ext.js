$(document).ready(function () {
  $("#selected").change(function () {
    if ($(this).val() != 'default') {
      $(this).parent().submit();
    }
  });
});




